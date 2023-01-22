import React from 'react'

function Card({data}) {
	const lang_style={
		background: data.languageColor,
		width: '10px',
		height: '10px',
		borderRadius: '50%'
	}

	return (
		<div className='card_container'>
			<div className='card_header'>
				<div className='avatar'>
					<img src="https://avatars.githubusercontent.com/u/84170801?v=4" alt="avatar" />
				</div>
				<div className='repo_details'>
					<h3>{data.owner}</h3>
					<h5>{data.repo}</h5>
				</div>
			</div>
			<div className='card_body'>
				<div className='data'>
					<h5>Language : </h5>
					<p style={lang_style}></p> 
					<p>{data.language}</p>
				</div>
				<div className='data'>
					<h5>Stars : </h5>
					<p>{data.stars}</p>
				</div>
				<div className='data'>
					<h5>Forks : </h5>
					<p>{data.forks}</p>
				</div>
				<div className='data'>
					<h5>Live Site : </h5>
					<a href={`https://jothishwar.github.io/${data.repo}/`} >click here</a>
				</div>
			</div>
		</div>
	)
}

export default Card