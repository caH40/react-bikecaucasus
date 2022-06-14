import React from 'react'

import classes from './MainModal.module.css'

const MainModal = props => {
	const { children, visible, setVisible } = props

	const mainClasses = [classes.authModal]

	if (visible) {
		mainClasses.push(classes.active)
		window.addEventListener('keydown', keyHandler)
	}

	function keyHandler(e) {
		if (e.keyCode !== 27) return
		setVisible(false)
		window.removeEventListener('keydown', keyHandler)
	}

	return (
		<div className={mainClasses.join(' ')} onClick={() => setVisible(false)}>
			<div className={classes.content} onClick={e => e.stopPropagation()}>
				{children}
			</div>
		</div>
	)
}

export default MainModal
