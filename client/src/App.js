import React, {useEffect, useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import NotFound from './components/NotFound';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Signup from './components/Signup';
import Aircraft from './components/Aircraft';
import Logbook from './components/Logbook';
import { UserProvider } from './context/user';


function App() {

  const [aircraft, setAircraft] = useState([]);
  
  useEffect(() => {
    fetch('aircrafts/show/')
    .then(r => r.json())
    .then(r => setAircraft(r))
  }, [])

  console.log(aircraft)

  return (
    <UserProvider>
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='*' element={<NotFound/>} />
        <Route path='/login' element={<Login />} /> 
        <Route path='/signup' element={<Signup/>} /> 
        <Route path='/aircraft' element={<Aircraft aircraft={aircraft}/>} /> 
        <Route path='/logbook' element={<Logbook/>} /> 
      </Routes>
    </Router>
    </UserProvider>
  );
}

export default App;
