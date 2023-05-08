import React, {useState, useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import NotFound from './components/NotFound';
import NavBar from './components/NavBar';
import Login from './components/Login';

function App() {

  const [user, setUser] = useState('')

  /*
  useEffect = () => {
    fetch('/auth')
    .then(res => {
      if (res.ok) {
        res.json().then(currentUser => setUser(currentUser))
      }
    })
  }
  */

  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home user={user} />}/>
        <Route path='*' element={<NotFound/>} />
        <Route path='/login' element={<Login user={user}/>} /> 
      </Routes>
    </Router>
    
  );
}

export default App;
