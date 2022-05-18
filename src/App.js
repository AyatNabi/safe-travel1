/* eslint-disable no-undef */
import React from 'react';
import { BrowserRouter as Router , Routes,Route } from'react-router-dom';
import About from './pages/About'
import Home from '../src/pages/Home'
import Policies from '../src/pages/Policies';
import Countries from '../src/pages/Countries';
import Navbar  from '../src/components/Navbar/Navbar';
import Navbarbotton  from '../src/components/Navbarbotton/bottonNav';
import './App.css';

function App  () {

  return (
    <div className="container">
    <Router>
   
    <Navbar />
   <Routes>
  
     <Route path='/' exact element={<Home/>} ></Route>
     <Route path="/Countries.js" exact element={<Countries/>}></Route>
     <Route path="/Policies.js" exact element={<Policies/>} ></Route>
     <Route path="/About.js" exact element={<About/>}></Route>
    
    

   </Routes>
    <Navbarbotton />
    </Router>
    </div>

  )
}

export default App
