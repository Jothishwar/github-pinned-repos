import './App.css';
import { useState, useEffect } from 'react';
import Card from './components/Card';

function App() {

  const [user] = useState('jothishwar');
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      const res = await fetch(`https://gh-pinned-repos.egoist.dev/?username=${user}`)
      const data = await res.json()
      setItems(data)
    };
    fetchRepos()
  },[])

  return (
    <div className="app">
      <h2>Repositories</h2>
      {items && (<>
        <div className="repos">
          {items.map((item) => (
            <Card key={item.index} data={item} />
          ))}
        </div>
      </>)}
    </div>
  );
}

export default App;
