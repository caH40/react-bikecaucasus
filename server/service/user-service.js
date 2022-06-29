import User from '../models/user-model.js'
import bcrypt from 'bcrypt'
import { v4 as uuidv4 } from 'uuid'

import mailerService from './mail-service.js'
import tokenService from './token-service.js'
import UserDto from '../dtos/user-dto.js'
import ApiError from '../exceptions/api-error.js'
import userModel from '../models/user-model.js'

class UserService {
	async registration(login, email, password) {
		const candidate = await User.findOne({ email })
		const candidateLogin = await User.findOne({ login })
		if (candidateLogin) {
			throw ApiError.BadRequest(`Логин ${login} уже занят!`)
		}
		if (candidate) {
			throw ApiError.BadRequest(`Пользователь с таким email существует!`)
		}
		const hashPassword = await bcrypt.hash(password, 4)

		const activationToken = uuidv4()
		const user = await User.create({ login, email, password: hashPassword, activationToken })
		const target = 'registration'
		const mail = await mailerService.sendActivationMail(
			email,
			activationToken,
			target,
			login,
			password
		)

		const userDto = new UserDto(user) //возвращает только три поля
		const tokens = tokenService.generateTokens({ ...userDto })
		await tokenService.saveToken(userDto.id, tokens.refreshToken)

		return { ...tokens, user: userDto }
	}

	async activate(activationToken) {
		const user = await User.findOne({ activationToken })
		if (!user) {
			throw ApiError.BadRequest('Некорректная ссылка активации')
		}
		user.isActivated = true
		await user.save()
	}

	async login(login, password) {
		const user = await User.findOne({ login })
		if (!user) {
			throw ApiError.BadRequest(`Пользователь с логином ${login} не найден`)
		}
		const isPassEquals = await bcrypt.compare(password, user.password)
		if (!isPassEquals) {
			throw ApiError.BadRequest('Неверный пароль')
		}
		//из модели выбрасываем всё ненужное
		const userDto = new UserDto(user)
		const tokens = tokenService.generateTokens({ ...userDto })
		await tokenService.saveToken(userDto.id, tokens.refreshToken)

		return { ...tokens, user: userDto }
	}

	async logout(refreshToken) {
		const token = await tokenService.removeToken(refreshToken)
		return token
	}

	async refresh(refreshToken) {
		if (!refreshToken) {
			throw ApiError.UnauthorizedError()
		}
		const userData = tokenService.validateRefreshToken(refreshToken)
		console.log('userData user-service', userData)
		const tokenFromDb = tokenService.findToken(refreshToken)
		if (!userData || !tokenFromDb) {
			throw ApiError.UnauthorizedError()
		}
		const user = await userModel.findById(userData.id)
		const userDto = new UserDto(user)
		const tokens = tokenService.generateTokens({ ...userDto })
		await tokenService.saveToken(userDto.id, tokens.refreshToken)

		return { ...tokens, user: userDto }
	}

	async resetPassword(email) {
		const resetToken = uuidv4()
		const user = await User.findOneAndUpdate({ email }, { $set: { resetToken } })
		if (!user) return { message: `Учетной записи с ${email} не существует`, hasError: true }
		const target = 'resetPassword'
		await mailerService.sendActivationMail(user.email, resetToken, target, user.login)
		const userDto = new UserDto(user)

		return userDto
	}

	async checkResetToken(resetToken) {
		const user = await User.findOne({ resetToken })
		if (!user) return { message: 'Ошибка при сбросе пароля', hasError: true }
		const userDto = new UserDto(user)
		return userDto
	}

	async saveNewPassword(resetToken, password) {
		const hashPassword = await bcrypt.hash(password, 4)
		const user = await User.findOneAndUpdate(
			{ resetToken },
			{ $set: { password: hashPassword, resetToken: '' } }
		)
		if (!user) return { message: 'Ошибка при изменении пароля', hasError: true }
		const target = 'savedNewPassword'
		await mailerService.sendActivationMail(user.email, resetToken, target, user.login, password)
		const userDto = new UserDto(user)
		return userDto
	}

	async getAllUsers() {
		const users = await User.find()
		return users
	}
}

export default new UserService()
