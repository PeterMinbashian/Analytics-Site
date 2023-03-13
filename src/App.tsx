import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Main from './Pages/Main';

function App() {
  return (
    <div className="App">
      <Main/>
    </div>
  );
}

export default App;
