import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

import ButtonAuth from '../UI/ButtonAuth/ButtonAuth'
import InputAuth from '../UI/InputAuth/InputAuth'
import classes from './Authentication.module.css'
import $axios from '../../API/axios/index.js'
import { validateUsername, validatePassword } from '../../service/validatorService'

const Authentication = ({ setTypeAuth, setVisible, answer }) => {
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
			.then(response => {
				console.log(response)
				answer(response.data.user.login)
				setTypeAuth('answer')
				setTimeout(() => {
					setVisible(false)
				}, 1000)
			})

			.catch(errors => {
				setValidationAll(errors.response.data.message)
			})
		reset()
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={classes.block}>
			<h4 className={classes.title}>Вход на Bike-Caucasus</h4>
			<InputAuth
				register={validateUsername(register)}
				label='Логин'
				validationText={errors.username ? errors.username.message : ''}
				input={{ id: 'username', autoComplete: 'username', type: 'text' }}
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
