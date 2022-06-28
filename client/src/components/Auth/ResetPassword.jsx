import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

import $axios from '../../API/axios/index.js'
import ButtonAuth from '../UI/ButtonAuth/ButtonAuth'
import InputAuth from '../UI/InputAuth/InputAuth'
import { validateEmail } from '../../service/validatorService'

import classes from './Authentication.module.css'

const ResetPassword = ({ setTypeAuth, setAnswerContent }) => {
	const [validationAll, setValidationAll] = useState('')

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ mode: 'all' })

	const onSubmit = async data => {
		await $axios({ method: 'post', url: '/api/reset', data: { email: data.email } })
			.then(response => {
				setTypeAuth('answer')
				setAnswerContent(
					`Инструкция по восстановлению пароля отправлена на почту ${response.data.email}`
				)
			})
			.catch(error => {
				console.log(error)
				setValidationAll(error.response.data.message)
			})
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={classes.block}>
			<h4 className={classes.title}>Восстановление пароля</h4>

			<InputAuth
				register={validateEmail(register)}
				label='Email'
				validationText={errors.email ? errors.email.message : ''}
				input={{ id: 'email', autoComplete: 'email', type: 'text' }}
			/>
			<ButtonAuth
				setTypeAuth={() => setTypeAuth('login')}
				label='Уже есть аккаунт?'
				labelLink='Вход'
				validationText={validationAll}>
				Восстановить
			</ButtonAuth>
		</form>
	)
}

export default ResetPassword
