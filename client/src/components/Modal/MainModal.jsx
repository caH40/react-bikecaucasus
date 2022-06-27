import React from 'react'

import classes from './MainModal.module.css'

const MainModal = props => {
	const { children, visible, setVisible, setTypeAuth } = props

	const mainClasses = [classes.authModal]

	if (visible) {
		mainClasses.push(classes.active)
		window.addEventListener('keydown', keyHandler)
	}

	function keyHandler(e) {
		if (e.keyCode !== 27) return
		setVisible(false)
		window.removeEventListener('keydown', keyHandler)
		setTypeAuth('login')
	}

	return (
		<div
			className={mainClasses.join(' ')}
			onClick={() => {
				setVisible(false)
				//для установки значения по умолчанию
				setTypeAuth('login')
			}}>
			<div className={classes.content} onClick={e => e.stopPropagation()}>
				{children}
			</div>
		</div>
	)
}

export default MainModal
