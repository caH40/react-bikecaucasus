import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

import ButtonAuth from '../UI/ButtonAuth/ButtonAuth'
import InputAuth from '../UI/InputAuth/InputAuth'
import classes from './Authentication.module.css'
import $axios from '../../API/axios/index.js'

const Authentication = ({ setTypeAuth }) => {
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
			url: '/api/login',
			data: { login: data.username, password: data.password },
		})
			.then(response => console.log(response.data))
			.catch(errors => {
				setValidationAll(errors.response.data.message)
			})
		reset()
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={classes.block}>
			<h4 className={classes.title}>Вход на Bike-Caucasus</h4>
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
				label='Первый раз на сайте?'
				labelLink='Создать аккаунт!'
				setTypeAuth={() => setTypeAuth('registration')}
				validationText={validationAll}>
				Вход
			</ButtonAuth>
		</form>
	)
}

export default Authentication
