import React from 'react'

import classes from './css-components/NewsInteractive.module.css'
import Comments from './UI/News/Comments/Comments'
import Dislike from './UI/News/Dislike/Dislike'
import Like from './UI/News/Like/Like'
import Share from './UI/News/Share/Share'

const NewsInteractive = ({ element }) => {
	return (
		<div className={classes.block}>
			<div className={classes.box}>
				<Like element={element} />
				<Comments element={element} />
				<Share />
				<Dislike />
			</div>
			<div className='date'>{new Date(element.date).toLocaleString()}</div>
		</div>
	)
}

export default NewsInteractive
