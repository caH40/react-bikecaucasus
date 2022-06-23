import React from 'react'

import Li from './Li'
import classes from '../../css-components/Navbar.module.css'

const Navbar = props => {
	return (
		<nav className='menu'>
			<ul className={classes.list}>
				<Li to='/' classNameLi={classes.item} classNameLink={classes.link}>
					Главная
				</Li>
				<Li to='trails' classNameLi={classes.item} classNameLink={classes.link}>
					Маршруты
				</Li>
				<Li to='gallery' classNameLi={classes.item} classNameLink={classes.link}>
					Галерея
				</Li>
				<Li to='dzhilsu' classNameLi={classes.item} classNameLink={classes.link}>
					Джилы-Су
				</Li>
				<Li to='profile' className={classes.item} classNameLink={classes.link__img}>
					<img className={classes.profile__img} src='images/icons/avatar.svg' alt='avatar' />
				</Li>
				<li onClick={() => props.loginModal(true)} className={classes.link__img}>
					<img className={classes.login__icon} src='images/icons/login.svg' alt='Пустышка' />
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
