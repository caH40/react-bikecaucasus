import React from 'react'
import { Link } from 'react-router-dom'

import classes from './InputAuth.module.css'

const InputAuth = ({ label, labelLink, to, validationText, input, register }) => {
	return (
		<div className={classes.block}>
			<div className={classes.label}>
				<label>{label}</label>
				{labelLink ? (
					<Link to={to} className={classes.link}>
						{labelLink}
					</Link>
				) : (
					<span></span>
				)}
			</div>
			<input {...register} {...input} className={classes.input} />
			<div className={classes.validation}>{validationText}</div>
		</div>
	)
}

export default InputAuth
