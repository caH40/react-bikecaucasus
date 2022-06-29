import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'

import MainModal from '../Modal/MainModal'
import { validatePassword } from '../../service/validatorService.js'
import classes from './Authentication.module.css'
import $axios from '../../API/axios/index.js'
import ButtonAuth from '../UI/ButtonAuth/ButtonAuth'
import InputAuth from '../UI/InputAuth/InputAuth'

const NewPassword = () => {
	const [visible, setVisible] = useState(true)
	const [typeAuth, setTypeAuth] = useState('login')
	const [validationAll, setValidationAll] = useState('')

	let { resetToken } = useParams()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ mode: 'all' })

	const onSubmit = async data => {
		await $axios({
			method: 'post',
			url: '/api/password',
			data: { password: data.password, resetToken },
		})
			.then(response => {
				console.log(response)
				setVisible(false)
			})

			.catch(errors => {
				setValidationAll(errors.response.data.message)
			})
	}

	return (
		<MainModal visible={visible} setVisible={setVisible} setTypeAuth={setTypeAuth}>
			<form onSubmit={handleSubmit(onSubmit)} className={classes.block}>
				<h4 className={classes.title}>Создание пароля</h4>
				<InputAuth
					register={validatePassword(register)}
					label='Введите новый пароль:'
					validationText={errors.password ? errors.password.message : ''}
					input={{ id: 'new-password', autoComplete: 'new-password', type: 'password' }}
				/>
				<ButtonAuth validationText={validationAll}>Сохранить</ButtonAuth>
			</form>
		</MainModal>
	)
}

export default NewPassword
