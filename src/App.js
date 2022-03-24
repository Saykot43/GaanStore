import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Navbar/Navbar.jsx'
import Card from './Card/Card.jsx'

function App() {
  const [guns, setGuns]= useState([]);

  useEffect(()=>{
    fetch('https://raw.githubusercontent.com/mir-hussain/guns/main/data.json')
    .then(res => res.json())
    .then(data => setGuns(data));
  },[])
  return (
    <div className="App">
      <Navbar />
      <div className='card-container'>
      {
        guns.map(gun =><Card 
        key="gun.id"
          data={gun}
        />)
      }
      </div>
    </div>
  );
}

export default App;
