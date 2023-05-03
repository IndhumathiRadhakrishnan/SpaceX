import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import Rockets from './Containers/Rockets';
import Launches from './Containers/Launches';
import History from './Containers/History';
import Home from './Containers/Home'
import Navbar from './Components/Navbar';

function App() {
  return (
     <BrowserRouter>
        <Routes>
     
          <Route path=''element ={<Navbar/>} >
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/launches" element={<Launches />} />
          <Route path="/rockets" element={<Rockets />} />
         </Route>
        </Routes>
      </BrowserRouter>
  )

}

export default App;
