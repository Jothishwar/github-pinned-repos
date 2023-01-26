import React from 'react';
import Card from './Card';

function Repositories({items,user}) {
	return (
		<div className='repos_container'>
			{items && (
			<>
			  <h2>Repositories</h2>
			  <div className="repos">
			    {items.map((item) => (
			      <Card key={items.indexOf(item)} data={item} user={user} />
			    ))}
			  </div>
			</>
			)}
		</div>
	)
}

export default Repositories;