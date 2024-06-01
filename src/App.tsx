import React from 'react';
import logo from './logo.svg';
import './App.css';

/**
 * 1. Create form to get user's name, age and hobby.
 * 2. Display saved information in the table.
 * 3. Add button and flow to table's entry to edit user's information.
 * 4. Add button to delete user's information.
 */

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
