import instance from '../API/axios'

export default class AuthService {
	static async login(email, password) {
		return instance.post('/login')
	}
}
