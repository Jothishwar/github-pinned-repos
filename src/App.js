import './App.css';
import { useState} from 'react';
import GetCode from './components/GetCode';
import Repositories from './components/Repositories';
import { Button } from 'react-bootstrap';

function App() {

  const [user,setUser] = useState(null);
  const [items, setItems] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  const fetchData= () => {
      const fetchRepos = async () => {
        const res = await fetch(`https://gh-pinned-repos.egoist.dev/?username=${user}`)
        const data = await res.json()
        setItems(data)
        setIsLoading(false)
        setIsDisabled(false)
      };
      fetchRepos()
  };

  const handleChange=(e)=>{
    setUser(e.target.value)
    setIsDisabled(true)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    fetchData();
  }
  return (
    <div className="app">
      <form className='input_container' onSubmit={handleSubmit}>
        <p htmlFor='username'>User Name :</p>
        <input type="text" name='username' onChange={handleChange} required />
        <Button 
          variant="primary" 
          onClick={!isLoading? handleSubmit:null} 
          disabled={isLoading?true:false}
        >
          {isLoading ? 'Loading...' : 'Submit'}
        </Button>
        <Button 
          variant="secondary" 
          onClick={()=>setShowModal(true)} 
          disabled={isDisabled} 
        >
          Get Code
        </Button>
      </form>
      {isLoading && (
        <div className='scaling-dots'>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        )}
      {items && !isLoading && (
        <Repositories items={items} user={user} />
      )}
      {showModal && (
      <GetCode 
        show={showModal}
        onHide={()=>setShowModal(false)}
        user={user}
      />
      )}
    </div>
  );
}

export default App;
