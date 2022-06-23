import React from 'react'

import ButtonAuth from '../UI/ButtonAuth/ButtonAuth'
import InputAuth from '../UI/InputAuth/InputAuth'

import classes from './Authentication.module.css'

const Registration = ({ setTypeAuth }) => {
	return (
		<form className={classes.block}>
			<h4 className={classes.title}>Регистрация аккаунта</h4>
			<InputAuth label='Логин' validationText='' />
			<InputAuth label='Email' validationText='' />
			<InputAuth label='Пароль' validationText='' />
			<ButtonAuth
				setTypeAuth={() => setTypeAuth('login')}
				label='Уже есть аккаунт?'
				labelLink='Вход!'
				validationText=''>
				Регистрация
			</ButtonAuth>
		</form>
	)
}

export default Registration
