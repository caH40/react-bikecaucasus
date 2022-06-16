import Router from 'express'
import { body } from 'express-validator'

import userController from '../controllers/user-controller.js'

const router = new Router()

router.post(
	'/registration',
	body('email').isEmail(),
	body('password').isLength({ min: 6, max: 32 }),
	userController.registration
)
router.post('/login', userController.login)
router.post('/logout', userController.logout)
//:link это динамический параметр, который будет принимать из url как params
router.get('/activate/:link', userController.activate)
router.get('/refresh', userController.getUsers)
router.get('/users', userController.getUsers)

export default router
