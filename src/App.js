// src/App.js

import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dashboard Application</h1>
      </header>
      <main>
        <Dashboard />
      </main>
      <footer>
        <p>&copy; 2024 Your Company</p>
      </footer>
    </div>
  );
}

export default App;

