import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';

function GetCode(props) {
	return (
		<div>
			<Modal
				{...props}
				size='lg'
				centered
			>
				<Modal.Header closeButton>
					Code
				</Modal.Header>
				<Modal.Body>
					Your Code
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={props.onHide}>Close</Button>
				</Modal.Footer>
			</Modal>			
		</div>
	)
}

export default GetCode