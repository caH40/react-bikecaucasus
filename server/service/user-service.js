import User from '../models/user-model.js'

class UserService {
	async registration(email, password) {
		const candidate = await User.findOne({ email })
		if (candidate) {
			throw new Error(`Пользователь с почтовым адресом ${email} уже существует`)
		}
		const user = await User.create({ email, password })
	}
}

export default new UserService()
