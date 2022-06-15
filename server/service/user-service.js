import User from '../models/user-model.js'
import bcrypt from 'bcrypt'
import { v4 as uuidv4 } from 'uuid'

import mailerService from './mail-service.js'

class UserService {
	async registration(email, password) {
		const candidate = await User.findOne({ email })
		if (candidate) {
			throw new Error(`Пользователь с почтовым адресом ${email} уже существует`)
		}
		const hashPassword = await bcrypt.hash(password, 4)

		const activationLink = uuidv4()
		const user = await User.create({ email, hashPassword, activationLink })
		const mail = await mailerService.sendMail(target, mailToken, email, username, password)
	}
}

export default new UserService()
