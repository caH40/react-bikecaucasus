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
router.get('/activate/:link', userController.activate)
router.get('/refresh', userController.refresh)
router.get('/users', authMiddleware, userController.getUsers)

export default router
