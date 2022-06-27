import React, { useEffect, useState } from 'react'

import Navbar from './UI/Navbar/Navbar'
import MainModal from './Modal/MainModal'
import Authentication from './Auth/Authentication'
import Registration from './Auth/Registration'
import RememberPassword from './Auth/RememberPassword'
import Answer from './Auth/Answer'

const Header = () => {
	const [visible, setVisible] = useState(false)
	const [typeAuth, setTypeAuth] = useState('login')
	const [modalAuth, setModalAuth] = useState(<Authentication />)
	const [answerContent, setAnswerContent] = useState('')

	useEffect(() => {
		console.log('перерисовка')
		if (typeAuth === 'login') {
			setModalAuth(
				<Authentication
					setTypeAuth={setTypeAuth}
					setVisible={setVisible}
					answer={setAnswerContent}
				/>
			)
		}
		if (typeAuth === 'registration') {
			setModalAuth(<Registration setTypeAuth={setTypeAuth} />)
		}
		if (typeAuth === 'rememberPass') {
			setModalAuth(<RememberPassword setTypeAuth={setTypeAuth} />)
		}
		if (typeAuth === 'answer') {
			setModalAuth(<Answer>{answerContent}</Answer>)
		}
	}, [typeAuth])

	function openLoginModal() {
		setVisible(true)
		setTypeAuth('login')
	}

	return (
		<header className='header'>
			<img className='logo' src='images/icons/logo.svg' alt='' />
			<Navbar loginModal={openLoginModal} />
			<MainModal visible={visible} setVisible={setVisible} setTypeAuth={setTypeAuth}>
				{modalAuth}
			</MainModal>
		</header>
	)
}

export default Header
