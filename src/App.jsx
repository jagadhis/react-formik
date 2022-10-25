import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Signup from './Signup';
import Home from './Navbar';

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
