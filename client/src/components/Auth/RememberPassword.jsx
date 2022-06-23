import React from 'react'

import ButtonAuth from '../UI/ButtonAuth/ButtonAuth'
import InputAuth from '../UI/InputAuth/InputAuth'

import classes from './Authentication.module.css'

const RememberPassword = ({ setTypeAuth }) => {
	return (
		<form className={classes.block}>
			<h4 className={classes.title}>Восстановление пароля</h4>

			<InputAuth label='Email' validationText='' />
			<ButtonAuth
				setTypeAuth={() => setTypeAuth('login')}
				label='Уже есть аккаунт?'
				labelLink='Вход'
				validationText=''>
				Восстановить
			</ButtonAuth>
		</form>
	)
}

export default RememberPassword
