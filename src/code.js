const appCode = (user)=>(`import { useState, useEffect } from 'react';
import Card from './Card';
import './App.css';

function App() {
	const [items, setItems] = useState(null);

	useEffect(() => {
		const fetchRepos = async () => {
		    const res = await fetch(https://gh-pinned-repos.egoist.dev/?username=${user})
		    const data = await res.json()
		    setItems(data)
		};
		fetchRepos()
	}, [])

	return(
		<div className="app">
			{items && (
			<>
				{items.map((item) => (
				    <Card key={items.indexOf(item)} data={item} />
			    ))}
			</>
		    )}
		</div>
	)
}`);

const cardCode=(user)=>(`import React from 'react'

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
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
					  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
					  <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
					</svg>
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
					<a href={https://${user}.github.io/{data.repo}/} target='__blank' >
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
`);

export {appCode,cardCode};