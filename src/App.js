import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [clicks, setClicks] = useState(0);

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
    </div>
  );
}

export default App;
