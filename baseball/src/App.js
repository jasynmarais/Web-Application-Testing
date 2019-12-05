import React, { useState, useEffect } from 'react';
import './App.css';
import Display from './components/Display';
import Dashboard from './components/Dashboard';

function App() {
  const [strikes, setStrikes] = useState(0);
  const [balls, setBalls] = useState(0);

  useEffect(() => {
    if(strikes === 3 || balls === 4) {
      setBalls(0);
      setStrikes(0);
    }
  }, [balls, strikes]);

  return (
    <div className="App">
      <h1>Baseball Display</h1>
      <Display 
        strikes={strikes}
        balls={balls}
      />
      <h2>Baseball Dashboard</h2>
      <Dashboard 
        strikes={strikes}
        balls={balls}
        setStrikes={setStrikes}
        setBalls={setBalls}
      />
    </div>
  );
}

export default App;
