import React, { useState } from 'react'

import classes from './css-components/NewsInteractive.module.css'
import Comments from './UI/News/Comments/Comments'
import Dislike from './UI/News/Dislike/Dislike'
import Like from './UI/News/Like/Like'
import Share from './UI/News/Share/Share'

const NewsInteractive = ({ element }) => {
	const [liked, setLiked] = useState(false)
	const [disliked, setDisliked] = useState(false)
	const [likeQuantity, setLikeQuantity] = useState('0')

	function clickLike() {
		setLikeQuantity(prev => Number(prev) + 1)
	}

	function clickDisLike() {
		setLikeQuantity(prev => Number(prev) - 1)
	}

	return (
		<div className={classes.block}>
			<div className={classes.box}>
				<Like onClick={clickLike} likeQuantity={likeQuantity} liked={liked} />
				<Comments element={element} />
				<Share />
				<Dislike onClick={clickDisLike} disliked={disliked} />
			</div>
			<div className='date'>{new Date(element.date).toLocaleString()}</div>
		</div>
	)
}

export default NewsInteractive
