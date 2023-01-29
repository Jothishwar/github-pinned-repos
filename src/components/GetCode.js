import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { CodeBlock, dracula } from "react-code-blocks";

function GetCode(props) {

	const [key, setKey] = useState('app.js');
	const app = `import { useState, useEffect } from 'react';
import Card from './Card';
import './App.css';

function App() {
	const [items, setItems] = useState(null);

	useEffect(() => {
		const fetchRepos = async () => {
		    const res = await fetch(https://gh-pinned-repos.egoist.dev/?username=${props.user})
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
				    <Card key={items.indexOf(item)} data={item} user={user} />
			    ))}
			</>
		    )}
		</div>
	)
}`
	
	return (
		<div>
			<Modal
				{...props}
				size='lg'
				centered
			>
				<Modal.Header closeButton>
					App Code
				</Modal.Header>
				<Modal.Body>
					<Tabs
						id='code'
						activeKey={key}
						onSelect={(e)=>setKey(e)}
						className='mb-3'
					>
						<Tab eventKey='app.js' title='App.js'>
							<CodeBlock
							text={app}
							language={'jsx'}
							theme={dracula}
							/>
						</Tab>
						<Tab eventKey='card.js' title='Card.js'>
						</Tab>
						<Tab eventKey='app.css' title='App.css'>
							App.css
						</Tab>
					</Tabs>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={props.onHide}>Close</Button>
				</Modal.Footer>
			</Modal>			
		</div>
	)
}

export default GetCode