import React from 'react'
import { Link } from 'react-router-dom'

import classes from './ButtonAuth.module.css'

const ButtonAuth = ({ label, labelLink, to, validationText, children }) => {
	return (
		<div>
			<div className={classes.block__button}>
				<button className={classes.button}>{children}</button>
				<div className={classes.validation}>{validationText}</div>
			</div>
			<div className={classes.label}>
				<span>{label}</span>
				{labelLink ? (
					<Link to={to} className={classes.link}>
						{labelLink}
					</Link>
				) : (
					<span></span>
				)}
			</div>
		</div>
	)
}

export default ButtonAuth
