import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { io } from 'socket.io-client'
import logo from './logo.svg';
import './App.css';

const socket = io('http://170.1.1.10:3001')

function App() {
  const [clicks, setClicks] = useState(0);
  const [isConnected, setIsConnected] = useState();
  const [data, setData] = useState(null);

  useEffect( ()=> {
    socket.on('connect', () => setIsConnected(true))  
  }, []);

  useEffect( ()=> {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.waifu.pics/sfw/waifu');
        console.log(response)
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleClick = () => {
    // Incrementamos el contador de clics
    setClicks(prevClicks => prevClicks + 1);
  };

  return (
    <div className="App">
      <header className="App-header">        
        <img src = {data ? data.url : logo} className="App-logo" alt='imgAxios'/>
        <p>Total de clics: {clicks}</p>        
        <button className="App-button" onClick={handleClick}>
          Click Me
        </button>
      </header>
      <div>
        <h2> {isConnected ? 'Conectado' : 'Desconectado'} </h2>
      </div>
    </div>
  );
}

export default App;
