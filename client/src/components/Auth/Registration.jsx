import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

import ButtonAuth from '../UI/ButtonAuth/ButtonAuth'
import InputAuth from '../UI/InputAuth/InputAuth'
import classes from './Authentication.module.css'
import $axios from '../../API/axios/index.js'
import { validateUsername, validateEmail, validatePassword } from '../../service/validatorService'

const Registration = ({ setTypeAuth }) => {
	const [validationAll, setValidationAll] = useState('')

	const {
		register,
		handleSubmit,

		reset,
		formState: { errors },
	} = useForm({ mode: 'all' })

	const onSubmit = async data => {
		$axios({
			method: 'post',
			url: '/api/registration',
			data: { login: data.username, email: data.email, password: data.password },
		})
			.then(response => {
				console.log(response)
				if (response.status === 201) {
					setTypeAuth('answer')
				}
			})
			.catch(errors => {
				console.log(errors.response.data)
				setValidationAll(errors.response.data.message)
			})
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={classes.block}>
			<h4 className={classes.title}>Регистрация аккаунта</h4>
			<InputAuth
				register={validateUsername(register)}
				label='Логин'
				validationText={errors.username ? errors.username.message : ''}
				input={{ id: 'username', autoComplete: 'username', type: 'text' }}
			/>
			<InputAuth
				register={validateEmail(register)}
				label='Email'
				validationText={errors.email ? errors.email.message : ''}
				input={{ id: 'email', autoComplete: 'username', type: 'text' }}
			/>
			<InputAuth
				register={validatePassword(register)}
				label='Пароль'
				labelLink='Забыли пароль?'
				setTypeAuth={() => setTypeAuth('rememberPass')}
				validationText={errors.password ? errors.password.message : ''}
				input={{ id: 'password', autoComplete: 'current-password', type: 'password' }}
			/>
			<ButtonAuth
				setTypeAuth={() => setTypeAuth('login')}
				label='Уже есть аккаунт?'
				labelLink='Вход!'
				validationText={validationAll}>
				Регистрация
			</ButtonAuth>
		</form>
	)
}

export default Registration
