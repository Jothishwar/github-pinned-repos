import './App.css';
import { useState, useEffect } from 'react';
import Card from './components/Card';

function App() {

  const [user] = useState('jothishwar');
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      const res = await fetch(`https://api.github.com/users/${user}/repos?page=1&per_page=10&sort=created`)
      const data = await res.json()
      setItems(data)
    };
    fetchRepos()
  },[])

  return (
    <div className="App">
      Github User
      {items && (<div>
        <h2>Repositories</h2>
        <div>
          {items.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
      </div>)}
    </div>
  );
}

export default App;
