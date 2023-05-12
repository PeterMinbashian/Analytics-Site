import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Main from './Pages/Main';
import Total from './Pages/Total'



function App() {
  const [TotalPage, setTotalPage] = useState(false);
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to='Main' replace={true}/>}/>
            <Route path='/Main' element={<Main totalPage={TotalPage} setTotalPage={setTotalPage}/>}/>
            <Route path="/total" element={<Total />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
