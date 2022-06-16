import 'dotenv/config'
import userService from '../service/user-service.js'
import { validationResult } from 'express-validator'

import ApiError from '../exceptions/api-error.js'

class UserController {
	async registration(req, res, next) {
		try {
			const errors = validationResult(req)
			if (!errors.isEmpty()) {
				return next(ApiError.BadRequest('Ошибка валидации', errors.array()))
			}
			const { email, password } = req.body
			const userData = await userService.registration(email, password)
			//refreshToken будем хранить в куках
			res.cookie('refreshToken', userData.refreshToken, {
				maxAge: 30 * 24 * 3600 * 1000,
				httpOnly: true,
				//для https необходим флаг secure:true??????
				secure: true,
			})

			return res.status(201).json(userData)
		} catch (error) {
			next(error)
		}
	}

	async login(req, res, next) {
		try {
			const { email, password } = req.body
			const userData = await userService.login(email, password)
			//refreshToken будем хранить в куках
			res.cookie('refreshToken', userData.refreshToken, {
				maxAge: 30 * 24 * 3600 * 1000,
				httpOnly: true,
				//для https необходим флаг secure:true??????
				secure: true,
			})

			return res.status(201).json(userData)
		} catch (error) {
			next(error)
		}
	}

	async logout(req, res, next) {
		try {
		} catch (error) {
			next(error)
		}
	}

	async activate(req, res, next) {
		try {
			const activationLink = req.params.link
			await userService.activate(activationLink)
			return res.redirect(process.env.CLIENT_URL)
			// return res.status(201).json({ message: 'Аккаунт активирован' })
		} catch (error) {
			next(error)
		}
	}

	async refresh(req, res, next) {
		try {
		} catch (error) {
			next(error)
		}
	}

	async getUsers(req, res, next) {
		try {
			res.status(200).json({ message: 'users' })
		} catch (error) {
			next(error)
		}
	}
}

export default new UserController()
