import React from 'react'
import News from '../components/News'

const Home = () => {
	return (
		<section className='main'>
			<h3 className='title__page'>Новости, события и анонсы мероприятий. </h3>
			<div className='main__inner'>
				<div className='main__inner-news'>
					<News />
				</div>
			</div>
		</section>
	)
}

export default Home
