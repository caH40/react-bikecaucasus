import React from 'react'

import classes from './Answer.module.css'

const Answer = ({ children }) => {
	return <div className={classes.block}>{children}</div>
}

export default Answer
