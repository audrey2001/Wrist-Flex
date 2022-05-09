import React from "react";
import Login from "./components/Login";
import Home from "./components/Home-nav-component/Home";
import Register from "./components/Register";
import Demo from "./components/demo.component/Demo";
import {Routes,Route} from "react-router-dom";

const App = () => {
  return (
    <div className ="App">
    <Routes>
    <Route exact path ="/" index element ={<Home/>}/>
    <Route exact path ="Login" element ={<Login/>}/>
    <Route exact path ="Register" element ={<Register/>}/>
    <Route exact path ="Demo" element ={<Demo/>}/>
     </Routes> 
    </div>
  );
};

export default App;
