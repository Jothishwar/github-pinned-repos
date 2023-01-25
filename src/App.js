import './App.css';
import { useState, useEffect } from 'react';
import Card from './components/Card';
import { Button } from "@chakra-ui/button";

function App() {

  const [user,setUser] = useState('jothishwar');
  const [items, setItems] = useState([]);

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
      <div>
        <p htmlFor='username'>User Name :</p>
        <input type="text" name='username' onChange={handleChange} />
        <Button colorScheme="teal" size='md' onClick={handleSubmit} >Submit</Button>
      </div>
      <h2>Repositories</h2>
      {items && (<>
        <div className="repos">
          {items.map((item) => (
            <Card key={items.indexOf(item)} data={item} user={user} />
          ))}
        </div>
      </>)}
    </div>
  );
}

export default App;
