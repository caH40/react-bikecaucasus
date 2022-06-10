import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from '../../css-components/Navbar.module.css'

const Li = ({ children, to, classNameLi, classNameLink }) => {
	const setActive = ({ isActive }) =>
		isActive ? `${classNameLink} ${classes.active__nav}` : classNameLink

	return (
		<li className={classNameLi}>
			<NavLink to={to} className={setActive}>
				{children}
			</NavLink>
		</li>
	)
}

export default Li
