import React from 'react'
import { Link } from 'react-router-dom'

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

			<div className={classes.block__button}>
				<button className={classes.button}>Вход</button>
				<div className={classes.validation}>необходимо больше символов</div>
			</div>
			<div className={classes.label}>
				<span>Первый раз на сайте?</span>
				<Link to='#' className={classes.link}>
					Создать аккаунт!
				</Link>
			</div>
		</form>
	)
}

export default Authentication
