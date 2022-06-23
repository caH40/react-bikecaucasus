import React, { useEffect, useState } from 'react'

import Navbar from './UI/Navbar/Navbar'
import MainModal from './Modal/MainModal'
import Authentication from './Auth/Authentication'
import Registration from './Auth/Registration'
import RememberPassword from './Auth/RememberPassword'

const Header = () => {
	const [visible, setVisible] = useState(false)
	//typeAuth = ['login','registration','rememberPass']
	const [typeAuth, setTypeAuth] = useState('login')
	const [modalAuth, setModalAuth] = useState(<Authentication />)
	console.log('перерисовка')

	useEffect(() => {
		if (typeAuth === 'login') {
			setModalAuth(<Authentication setTypeAuth={setTypeAuth} />)
		}
		if (typeAuth === 'registration') {
			setModalAuth(<Registration setTypeAuth={setTypeAuth} />)
		}
		if (typeAuth === 'rememberPass') {
			setModalAuth(<RememberPassword setTypeAuth={setTypeAuth} />)
		}
	}, [typeAuth])

	return (
		<header className='header'>
			<img className='logo' src='images/icons/logo.svg' alt='' />
			<Navbar loginModal={setVisible} />
			<MainModal visible={visible} setVisible={setVisible}>
				{modalAuth}
			</MainModal>
		</header>
	)
}

export default Header
