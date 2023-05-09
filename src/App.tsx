import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import Rockets from './Containers/Rocket/Rockets';
import Launches from './Containers/Launch/Launches';
import History from './Containers/History/History';
import Home from './Containers/Landing/Home'
import Navbar from './Components/Navbar';
import RocketDetails from './Containers/Rocket/RocketDetails';
import LaunchDetails from './Containers/Launch/LaunchDetails';
import ScrollToTop from './Components/ScrollToTop';
function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Routes>
        <Route path='' element={<Navbar />} >
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/launches" element={<Launches />} />
          <Route path="/rockets" element={<Rockets />} />
          <Route path="/launches/:id" element={<LaunchDetails />} />
          <Route path="/rockets/:id" element={<RocketDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
