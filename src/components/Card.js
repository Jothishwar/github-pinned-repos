import React from 'react'

function Card({data,user}) {
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
					<h4>{data.owner}</h4>
					<a href={data.link} target="__blank" >
						<h5>{data.repo}</h5>
						<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
						  <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
						  <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
						</svg>
					</a>
				</div>
			</div>
			<div className='card_body'>
				<p>{data.description}</p>
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
					<a href={`https://${user}.github.io/${data.repo}/`} target='__blank' >
						<p>click here </p>
						<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
						  <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
						  <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
						</svg>
					</a>
				</div>
			</div>
		</div>
	)
}

export default Card;