import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import NotFound from './components/NotFound';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Signup from './components/Signup';
import { UserProvider } from './context/user';


function App() {
  


  return (
    <UserProvider>
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='*' element={<NotFound/>} />
        <Route path='/login' element={<Login />} /> 
        <Route path='/signup' element={<Signup/>} /> 
      </Routes>
    </Router>
    </UserProvider>
  );
}

export default App;
