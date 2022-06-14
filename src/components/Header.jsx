import React, { useState } from 'react'

import Navbar from './UI/Navbar/Navbar'
import MainModal from './Modal/MainModal'
import Authentication from './Auth/Authentication'
import Registration from './Auth/Registration'

const Header = () => {
	const [visible, setVisible] = useState(true)

	return (
		<header className='header'>
			<img className='logo' src='images/icons/logo.svg' alt='' />
			<Navbar setVisible={setVisible} />
			<MainModal visible={visible} setVisible={setVisible}>
				{/* <Authentication /> */}
				<Registration />
			</MainModal>
		</header>
	)
}

export default Header
