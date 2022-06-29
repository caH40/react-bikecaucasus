import Router from 'express'
import { body } from 'express-validator'

import userController from '../controllers/user-controller.js'
import authMiddleware from '../middlewares/auth-middleware.js'

const router = new Router()

router.post(
	'/registration',
	body('login').isLength({ min: 4, max: 32 }),
	body('email').isEmail(),
	body('password').isLength({ min: 6, max: 32 }),
	userController.registration
)
router.post('/login', userController.login)
router.post('/logout', userController.logout)
//:link это динамический параметр, который будет принимать из url как params
router.get('/activate/:token', userController.activate)
router.get('/refresh', userController.refresh)
router.post('/reset', userController.resetPassword)
router.get('/new-password/:resetToken', userController.newPassword)
router.post('/password/', userController.saveNewPassword)
router.get('/users', authMiddleware, userController.getUsers)

export default router
