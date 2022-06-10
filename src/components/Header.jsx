import React from 'react'

import Navbar from './UI/Navbar/Navbar'

const Header = () => {
	return (
		<header className='header'>
			<img className='logo' src='images/icons/logo.svg' alt='' />
			<Navbar />
		</header>
	)
}

export default Header
