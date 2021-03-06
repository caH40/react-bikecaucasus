import 'dotenv/config'
import jwt from 'jsonwebtoken'

import Token from '../models/token-model.js'

class TokenService {
	generateTokens(payload) {
		const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, { expiresIn: '30s' })
		const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, { expiresIn: '30d' })
		return {
			accessToken,
			refreshToken,
		}
	}

	validateAccessToken(token) {
		try {
			const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET)
			return userData
		} catch (error) {
			return null
		}
	}

	validateRefreshToken(token) {
		try {
			const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET)
			return userData
		} catch (error) {
			return null
		}
	}

	//если зайти со второго устройства, то с первого произойдет разлогин, так как токен один и перезаписывается
	async saveToken(userId, refreshToken) {
		const tokenData = await Token.findOne({ user: userId })
		if (tokenData) {
			tokenData.refreshToken = refreshToken
			await tokenData.save()
		}

		const token = await Token.create({ user: userId, refreshToken })
		return token
	}

	async removeToken(refreshToken) {
		const tokenData = await Token.deleteOne({ refreshToken })
		return tokenData
	}

	async findToken(refreshToken) {
		const tokenData = await Token.findOne({ refreshToken })
		return tokenData
	}
}

export default new TokenService()
