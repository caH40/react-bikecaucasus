import User from '../models/user-model.js'
import bcrypt from 'bcrypt'
import { v4 as uuidv4 } from 'uuid'

import mailerService from './mail-service.js'
import tokenService from './token-service.js'
import UserDto from '../dtos/user-dto.js'
import ApiError from '../exceptions/api-error.js'

class UserService {
	async registration(email, password) {
		const candidate = await User.findOne({ email })
		if (candidate) {
			throw ApiError.BadRequest(`Пользователь с почтовым адресом ${email} уже существует`)
		}
		const hashPassword = await bcrypt.hash(password, 4)

		const activationLink = uuidv4()
		const user = await User.create({ email, password: hashPassword, activationLink })
		const target = 'registration'
		const username = email
		const mail = await mailerService.sendActivationMail(email, activationLink)
		console.log(mail)

		const userDto = new UserDto(user) //возвращает только три поля
		const tokens = tokenService.generateToken({ ...userDto })
		await tokenService.saveToken(userDto.id, tokens.refreshToken)

		return { ...tokens, user: userDto }
	}

	async activate(activationLink) {
		const user = await User.findOne({ activationLink })
		if (!user) {
			throw ApiError.BadRequest('Некорректная ссылка активации')
		}
		user.isActivated = true
		await user.save()
	}
}

export default new UserService()
