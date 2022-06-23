import React from 'react'
import { Link } from 'react-router-dom'

import classes from './ButtonAuth.module.css'

const ButtonAuth = ({ label, labelLink, validationText, children, setTypeAuth }) => {
	return (
		<div>
			<div className={classes.block__button}>
				<button className={classes.button}>{children}</button>
				<div className={classes.validation}>{validationText}</div>
			</div>
			<div className={classes.label}>
				<span>{label}</span>
				{labelLink ? (
					<span onClick={setTypeAuth} className={classes.link}>
						{labelLink}
					</span>
				) : (
					<span></span>
				)}
			</div>
		</div>
	)
}

export default ButtonAuth
