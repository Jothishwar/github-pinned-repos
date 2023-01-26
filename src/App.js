import './App.css';
import { useState} from 'react';

import Repositories from './components/Repositories';
import { Button } from 'react-bootstrap';

function App() {

  const [user,setUser] = useState(null);
  const [items, setItems] = useState(null);

  const fetchData= () => {
      const fetchRepos = async () => {
      const res = await fetch(`https://gh-pinned-repos.egoist.dev/?username=${user}`)
      const data = await res.json()
      setItems(data)
      };
      fetchRepos()
  };

  const handleChange=(e)=>{
    setUser(e.target.value)
  }
  const handleSubmit = () => {
    fetchData();
  }
  return (
    <div className="app">
      <div className='input_container'>
        <p htmlFor='username'>User Name :</p>
        <input type="text" name='username' onChange={handleChange} />
        <Button variant="primary" onClick={handleSubmit} >Submit</Button>
      </div>
      {items && (
        <Repositories items={items} user={user} />
      )}
    </div>
  );
}

export default App;
