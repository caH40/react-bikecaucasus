import React from 'react'

import classes from './css-components/Footer.module.css'
import Li from './UI/Navbar/Li'

const Footer = () => {
	return (
		<footer>
			<div className={classes.column}>
				<img className='logo' src='images/icons/logo.svg' alt='logo' />
				<ul>
					<Li to='/' classNameLink={classes.link}>
						Главная
					</Li>
					<Li to='trails' classNameLink={classes.link}>
						Маршруты
					</Li>
				</ul>
				<ul>
					<Li to='dzhilsu' classNameLink={classes.link}>
						Джилы-Су
					</Li>
					<Li to='gallery' classNameLink={classes.link}>
						Галерея
					</Li>
				</ul>
				<ul>
					<p>Социальные сети:</p>
					<a href='https://t.me/velokmv' className={classes.link}>
						<img src='images/icons/telegram.svg' alt='telegram' />
					</a>
				</ul>
			</div>
			<div className={classes.copyright}>Copyright © 2022 Bike-Caucasus</div>
		</footer>
	)
}

export default Footer
