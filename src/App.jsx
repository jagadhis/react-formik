import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Signup from './Signup';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />

      </Routes>

    </div>
  );
}

export default App;
