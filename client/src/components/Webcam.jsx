import React, { useEffect, useState } from 'react'

import classes from './css-components/Webcam.module.css'
import getWebImage from '../app_modules/webcam-image.js'

const Webcam = () => {
	const [webcamImage, setWebcamImage] = useState('images/webcamclear.png')

	useEffect(() => {
		getWebImage().then(data => setWebcamImage(data))
	}, [])

	return (
		<div className='webcam'>
			<div className='home__column'>
				<h4 className={classes.title}>Вебкамера на горе Шаджатмаз</h4>
				<a className={classes.block} href='https://gw.cmo.sai.msu.ru/webcam5.jpg'>
					<img className={classes.image} src={webcamImage} alt='webcam' />
				</a>
			</div>
		</div>
	)
}

export default Webcam
