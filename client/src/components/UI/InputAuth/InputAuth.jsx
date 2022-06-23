import React from 'react'
import { Link } from 'react-router-dom'

import classes from './InputAuth.module.css'

const InputAuth = ({ label, labelLink, validationText, input, register, setTypeAuth }) => {
	return (
		<div className={classes.block}>
			<div className={classes.label}>
				<label>{label}</label>
				{labelLink ? (
					<span onClick={setTypeAuth} className={classes.link}>
						{labelLink}
					</span>
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
