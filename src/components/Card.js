import React from 'react'

function Card({data}) {
	return (
		<div className='card_container'>
			<div className='card_header'>{data.repo}</div>
						
		</div>
	)
}

export default Card