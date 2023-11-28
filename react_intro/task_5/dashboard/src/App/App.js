import React from 'react';
import logo from '../assets/holberton-logo.jpg'
import './App.css';
import { getFullYear, getFooterCopy } from '../utils/utils';

function App() {
  return (
    <div className="App">
      <div className='App-header'>
        <img src={logo} alt='logo of holberton school' />
        <h1>School dashboard</h1>
      </div>

      <div className='App-body'>
        <p>Login to access the full dashboard</p>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
          />

          <button>OK</button>
        </div>
      </div>

      <div className='App-footer'>
        <p><i>Copyright {getFullYear()} - {getFooterCopy("isIndex")}</i></p>
      </div>
    </div>
  );
}

export default App;