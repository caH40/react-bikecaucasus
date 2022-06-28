import 'dotenv/config'
import userService from '../service/user-service.js'
import { validationResult } from 'express-validator'

import ApiError from '../exceptions/api-error.js'

class UserController {
	async registration(req, res, next) {
		try {
			console.log(req.body)
			const errors = validationResult(req)
			if (!errors.isEmpty()) {
				return next(ApiError.BadRequest('Ошибка валидации', errors.array()))
			}
			const { login, email, password } = req.body
			const userData = await userService.registration(login, email, password)
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
			const { login, password } = req.body
			const userData = await userService.login(login, password)
			//refreshToken будем хранить в куках
			res.cookie('refreshToken', userData.refreshToken, {
				maxAge: 30 * 24 * 3600 * 1000,
				httpOnly: true,
				//для https необходим флаг secure:true??????
				secure: false,
			})

			return res.status(201).json(userData)
		} catch (error) {
			next(error)
		}
	}

	async logout(req, res, next) {
		try {
			// const { refreshToken } = req.cookie
			const { refreshToken } = req.cookies
			const token = await userService.logout(refreshToken)
			res.clearCookie('refreshToken')
			return res.json(token)
		} catch (error) {
			next(error)
		}
	}

	async activate(req, res, next) {
		try {
			const activationToken = req.params.token
			await userService.activate(activationToken)
			return res.redirect(process.env.CLIENT_URL)
		} catch (error) {
			next(error)
		}
	}

	async refresh(req, res, next) {
		try {
			const { refreshToken } = req.cookies
			const userData = await userService.refresh(refreshToken)
			//refreshToken будем хранить в куках
			res.cookie('refreshToken', userData.refreshToken, {
				maxAge: 30 * 24 * 3600 * 1000,
				httpOnly: true,
				//для https необходим флаг secure:true??????
				secure: false,
			})

			return res.status(201).json(userData)
		} catch (error) {
			next(error)
		}
	}

	async resetPassword(req, res, next) {
		try {
			const { email } = req.body
			const response = await userService.resetPassword(email)
			if (response.hasError) {
				return res.status(400).json({ message: response.message })
			}
			res.status(200).json({ email: response.email })
		} catch (error) {
			next(error)
		}
	}

	async newPassword(req, res, next) {
		try {
			const { resetToken } = req.params
			console.log(resetToken)
			return res.status(200).json({ message: 'введите новый пароль' })
		} catch (error) {
			next(error)
		}
	}

	async getUsers(req, res, next) {
		try {
			const users = await userService.getAllUsers()
			return res.status(200).json(users)
		} catch (error) {
			next(error)
		}
	}
}

export default new UserController()
