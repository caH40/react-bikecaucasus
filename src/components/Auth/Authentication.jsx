import React from 'react'
import { Link } from 'react-router-dom'

import classes from './Authentication.module.css'

const Authentication = () => {
	return (
		<form className={classes.block}>
			<h4 className={classes.title}>Вход на Bike-Caucasus</h4>
			<div className={classes.block__input}>
				<div className={classes.label}>Логин или email</div>
				<input className={classes.input} type='text' />
				<div className={classes.validation}>необходимо больше символов</div>
			</div>
			<div className={classes.block__input}>
				<div className={classes.label}>
					<span>Пароль</span>
					<Link to='#' className={classes.link}>
						Забыли пароль?
					</Link>
				</div>
				<input className={classes.input} type='text' />
				<div className={classes.validation}>необходимо больше символов</div>
			</div>
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
