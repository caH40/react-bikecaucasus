import React from 'react'

import ButtonAuth from '../UI/ButtonAuth/ButtonAuth'

import InputAuth from '../UI/InputAuth/InputAuth'
import classes from './Authentication.module.css'

const Authentication = () => {
	return (
		<form className={classes.block}>
			<h4 className={classes.title}>Вход на Bike-Caucasus</h4>
			<InputAuth label='Логин или email' validationText='необходимо больше символов' />
			<InputAuth
				label='Пароль'
				labelLink='Забыли пароль?'
				to='#'
				validationText='необходимо больше символов'
			/>
			<ButtonAuth
				label='Первый раз на сайте?'
				labelLink='Создать аккаунт!'
				to='#'
				validationText='необходимо больше символов'>
				Вход
			</ButtonAuth>
		</form>
	)
}

export default Authentication
