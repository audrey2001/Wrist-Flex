import React from 'react';
import NavBar from "./components/Home-nav-component/NavBar";
import Login from "./components/Login";
import Home from "./components/Home-nav-component/Home";
import Register from "./components/Register";
import Demo from "./components/demo.component/Demo";

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
      <NavBar/>
      <Routes>
        <Route path = "/" element ={<Home/>}/>
        <Route path = "/Login" element ={<Login/>}/>
        <Route path = "/Register" element ={<Register/>}/>
        <Route path = "/Demo" element ={<Demo />}/>
      </Routes>
      </Router>
      
    </div>
  )
}

export default App;

  

  
