import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from './Components/Add';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/Navbar';

import Show from './Components/Show';
import Dataupdae from './Components/Dataupdae';
import Delete from './Components/Delete';
import Signup from './Components/auth/Signup'
import Login from './Components/auth/Login';
import { useState } from 'react';
import Logout from './Components/auth/Logout';



function App() {
  const[isLoggedIn,setLoggedIn]=useState('')
  console.log(isLoggedIn)
  return (
    <>
    <BrowserRouter>
    <Navbar isLoggedIn={isLoggedIn}/>
    <Routes>
      <Route path='/add' element={<Add/>}/>
      <Route path='/show' element={<Show/>}/>
      <Route path='/update/:pk/' element={<Dataupdae/>}/>
      <Route path='/delete/:pk/' element={<Delete/>}/>
      <Route path='/navbar' element={<Navbar/>}/>

      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login setLoggedIn={setLoggedIn}/>}/>
      <Route path='/logout' element={<Logout setLoggedIn={setLoggedIn}/>}/>


    </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
