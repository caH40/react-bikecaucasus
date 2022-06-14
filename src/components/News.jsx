import React, { useState, useEffect } from 'react'
import { BallTriangle } from 'react-loader-spinner'

import classes from './css-components/News.module.css'
import { fetchGet } from '../API/fetch.js'
import NewsInteractive from './NewsInteractive'

const News = () => {
	const [news, setNews] = useState([])

	// <BallTriangle color='#00BFFF' height='80' width='80' ariaLabel='loading' />

	useEffect(() => {
		fetchGet('/main/news').then(data => setNews(data.news))
	}, [])

	return (
		<div>
			{news.length === 0 ? (
				<BallTriangle color='#39a034' height='80' width='80' ariaLabel='loading' />
			) : (
				news.map((element, index) => (
					<div className={classes.card} key={index}>
						<img className={classes.image} src={element.newsImage} alt='картинка новости' />
						<div className={classes.box}>
							<div>
								<h3 className={classes.title}>{element.newsTitle}</h3>
								<p className={classes.text}>{element.newsText}</p>
							</div>
							<NewsInteractive element={element} />
						</div>
					</div>
				))
			)}
		</div>
	)
}

export default News
