import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client'
import logo from './logo.svg';
import './App.css';

const socket = io('http://170.1.1.10:3001')

function App() {
  const [clicks, setClicks] = useState(0);
  const [isConnected, setIsConnected] = useState();

  useEffect( ()=> {
    socket.on('connect', () => setIsConnected(true))  
  }, []);

  const handleClick = () => {
    // Incrementamos el contador de clics
    setClicks(prevClicks => prevClicks + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
