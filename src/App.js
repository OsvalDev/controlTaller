import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { io } from 'socket.io-client'
import logo from './logo.svg';
import './App.css';

const socket = io(process.env.REACT_APP_SOCKET_URL);
function App() {
  const [clicks, setClicks] = useState(0);
  const [isConnected, setIsConnected] = useState();
  const [data, setData] = useState(null);
  const [queryRes, serQueryRes] = useState(null);

  useEffect( ()=> {
    socket.on('connect', () => setIsConnected(true))  
  }, []);

  useEffect( ()=> {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.waifu.pics/sfw/waifu');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect( () => {
    const fetchData = async () => {
      try {
        const response = await axios.get(process.env.REACT_APP_SOCKET_URL + '/consultar');
        console.log(response)
        serQueryRes(response.data[0].datos);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, [] );

  const handleClick = () => {
    // Incrementamos el contador de clics
    setClicks(prevClicks => prevClicks + 1);
  };

  return (
    <div className="App">
      <header className="App-header">        
        <img src = {data ? data.url : logo} className="App-logo" alt='imgAxios'/>
        <h2> {queryRes ? queryRes : 'Fallo la BD'} </h2>
        <p>Total de clics: {clicks}</p>        
        <button className="App-button" onClick={handleClick}>
          Click Me
        </button>
        <a href='https://www.youtube.com/watch?v=EOR_MWAZNgQ' target='blank'>Presiona</a>
      </header>
      <div>
        <h2> {isConnected ? 'Conectado' : 'Desconectado'} </h2>
      </div>
    </div>
  );
}

export default App;
