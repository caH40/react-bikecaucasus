import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

import ButtonAuth from '../UI/ButtonAuth/ButtonAuth'
import InputAuth from '../UI/InputAuth/InputAuth'
import classes from './Authentication.module.css'
import $axios from '../../API/axios/index.js'

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
			.then(response => console.log(response.data))
			.catch(errors => {
				console.log(errors.response.data)
				setValidationAll(errors.response.data.message)
			})
		reset()
	}
	console.log(errors)

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={classes.block}>
			<h4 className={classes.title}>Регистрация аккаунта</h4>
			<InputAuth
				register={{
					...register('username', {
						required: 'Это обязательное поле для заполнения',
						minLength: { value: 5, message: 'Username должен быть больше 4х символов' },
						maxLength: { value: 15, message: 'Username не может быть больше 15 символов' },
					}),
				}}
				label='Логин'
				validationText={errors.username ? errors.username.message : ''}
				input={{ id: 'username', autoComplete: 'username', type: 'text' }}
			/>
			<InputAuth
				register={{
					...register('email', {
						required: 'Это обязательное поле для заполнения',
						pattern: {
							value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
							message: 'Ошибка при вводе Email',
						},
					}),
				}}
				label='Email'
				validationText={errors.email ? errors.email.message : ''}
				input={{ id: 'email', autoComplete: 'username', type: 'text' }}
			/>
			<InputAuth
				register={{
					...register('password', {
						required: 'Это обязательное поле для заполнения',
						minLength: { value: 6, message: 'Password должен быть больше 5х символов' },
						maxLength: { value: 15, message: 'Password не может быть больше 15 символов' },
					}),
				}}
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
