import React from 'react'
import { Link } from 'react-router-dom'

import {
	block,
	title,
	block__input,
	label,
	input,
	validation,
	link,
} from './Authentication.module.css'

const authObject = {
	title: 'Регистрация аккаунта',
	blockInput: [{ label: 'Логин' }, { label: 'Email' }, { label: 'Пароль' }],
	button: 'Регистрация',
	question: 'Уже есть аккаунт?',
	link: { text: 'Вход!', to: '#' },
}

const Auth = () => {
	return (
		<form className={block}>
			<h4 className={title}>Регистрация аккаунта</h4>

			<div className={block__input}>
				<div className={label}>Логин</div>
				<input className={input} type='text' />
				<div className={validation}>необходимо больше символов</div>
			</div>

			<div className={block__input}>
				<div className={label}>Email</div>
				<input className={input} type='text' />
				<div className={validation}></div>
			</div>
			<div className={block__input}>
				<div className={label}>Пароль</div>
				<input className={input} type='text' />
				<div className={validation}>необходимо больше символов</div>
			</div>
			<div className={block__button}>
				<button className={button}>Регистрация</button>
				<div className={validation}></div>
			</div>
			<div className={label}>
				<span>Уже есть аккаунт?</span>
				<Link to='#' className={link}>
					Вход!
				</Link>
			</div>
		</form>
	)
}

export default Auth
