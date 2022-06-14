import React from 'react'
import { Link } from 'react-router-dom'
import ButtonAuth from '../UI/ButtonAuth/ButtonAuth'
import InputAuth from '../UI/InputAuth/InputAuth'

import classes from './Authentication.module.css'

const Registration = () => {
	return (
		<form className={classes.block}>
			<h4 className={classes.title}>Регистрация аккаунта</h4>
			<InputAuth label='Логин' validationText='' />
			<InputAuth label='Email' validationText='' />
			<InputAuth label='Пароль' validationText='' />
			<ButtonAuth label='Уже есть аккаунт?' labelLink='Вход!' to='#' validationText=''>
				Регистрация
			</ButtonAuth>
		</form>
	)
}

export default Registration
