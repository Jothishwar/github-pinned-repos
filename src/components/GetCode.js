import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { CodeBlock, solarizedDark } from "react-code-blocks";
import { appCode,cardCode } from '../code.js';

function GetCode(props) {

	const [key, setKey] = useState('app.js');
	
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
							text={appCode(props.user)}
							language={'jsx'}
							theme={solarizedDark}
							/>
						</Tab>
						<Tab eventKey='card.js' title='Card.js'>
							<CodeBlock
							text={cardCode(props.user)}
							language={'jsx'}
							theme={solarizedDark}
							/>
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