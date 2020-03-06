import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const [apiResponse, setApiResponse] = useState('')

    const callAPI = () => {
        fetch("http://localhost:9000/testAPI")
            .then(res => res.text())
            .then(res => setApiResponse( res ));
    }

    useEffect(() => {
        callAPI()
    })

  return (
    <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">{apiResponse}</p>
    </div>
  );
}

export default App;
