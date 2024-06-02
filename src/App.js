// import './App.css'
import Home from "./components/Home"
import Login from "./components/Login"
import Signup from "./components/Signup"
import React from 'react';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </Router>

<h1>-------------------------</h1>
      <form action="/api/register-user" method="POST">
        <input type="text" name="user-name-1" id=""/>
        <input type="text" name="email-2" id=""/>
        <input type="submit" value="submit"/>
    </form>
    <h1>-------------------------</h1>

    </div>
  );
}

export default App;