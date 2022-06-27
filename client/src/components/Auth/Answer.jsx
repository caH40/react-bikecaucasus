import React from 'react'

import classes from './Answer.module.css'

const Answer = ({ children }) => {
	return <div className={classes.block}>С возвращением, {children}</div>
}

export default Answer
