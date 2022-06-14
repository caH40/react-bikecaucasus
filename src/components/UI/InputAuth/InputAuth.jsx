import React from 'react'
import { Link } from 'react-router-dom'

import classes from './InputAuth.module.css'

const InputAuth = ({ label, labelLink, to, validationText }) => {
	return (
		<div>
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
			<input className={classes.input} type='text' />
			<div className={classes.validation}>{validationText}</div>
		</div>
	)
}

export default InputAuth
