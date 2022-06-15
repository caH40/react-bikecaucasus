class UserController {
	async registration(req, res, next) {
		try {
		} catch (error) {
			console.log(error)
		}
	}

	async login(req, res, next) {
		try {
		} catch (error) {
			console.log(error)
		}
	}

	async logout(req, res, next) {
		try {
		} catch (error) {
			console.log(error)
		}
	}

	async activate(req, res, next) {
		try {
		} catch (error) {
			console.log(error)
		}
	}

	async refresh(req, res, next) {
		try {
		} catch (error) {
			console.log(error)
		}
	}

	async getUsers(req, res, next) {
		try {
			res.status(200).json({ message: 'users' })
		} catch (error) {
			console.log(error)
		}
	}
}

export default new UserController()
