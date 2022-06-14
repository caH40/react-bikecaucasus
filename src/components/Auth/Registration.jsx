import React from 'react'
import { Link } from 'react-router-dom'

import classes from './Authentication.module.css'

const Registration = () => {
	return (
		<form className={classes.block}>
			<h4 className={classes.title}>Регистрация аккаунта</h4>
			<div className={classes.block__input}>
				<div className={classes.label}>Логин</div>
				<input className={classes.input} type='text' />
				<div className={classes.validation}>необходимо больше символов</div>
			</div>
			<div className={classes.block__input}>
				<div className={classes.label}>Email</div>
				<input className={classes.input} type='text' />
				<div className={classes.validation}></div>
			</div>
			<div className={classes.block__input}>
				<div className={classes.label}>Пароль</div>
				<input className={classes.input} type='text' />
				<div className={classes.validation}>необходимо больше символов</div>
			</div>
			<div className={classes.block__button}>
				<button className={classes.button}>Регистрация</button>
				<div className={classes.validation}></div>
			</div>
			<div className={classes.label}>
				<span>Уже есть аккаунт?</span>
				<Link to='#' className={classes.link}>
					Вход!
				</Link>
			</div>
		</form>
	)
}

export default Registration
