import React from 'react'
import News from '../components/News'
import Webcam from '../components/Webcam'

const Home = props => {
	return (
		<section className='main'>
			<h3 className='title__page'>Новости, события и анонсы мероприятий</h3>
			<div className='home__inner'>
				<News />
				<Webcam />
			</div>
		</section>
	)
}

export default Home
