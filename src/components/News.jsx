import React, { useState, useEffect } from 'react'
// import { useFetching } from '../hooks/useFetching.jsx'

import classes from './css-components/News.module.css'
import { fetchGet } from '../API/fetch.js'
import NewsInteractive from './NewsInteractive'

const News = () => {
	const [news, setNews] = useState([])

	// const [fetchPosts] = useFetching(async () => {
	// 	const response = await fetchGet('/main/news')
	// 	setNews(response.news)
	// 	// console.log(response.news)
	// })

	useEffect(() => {
		fetchGet('/main/news').then(data => setNews(data.news))
	}, [])
	console.log(news)

	return (
		<div>
			{news.map((element, index) => (
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
			))}
		</div>
	)
}

export default News
