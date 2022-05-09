import React, {useState} from 'react'
import { NavLink} from 'react-router-dom'
import "./navbar.css";


const NavBar = () => {
    // this helps the toggling
    const [active,setActive] = useState('menu_list_contaniers');
    const [toggleIcon,setToggleIcon] = useState('menu_toggler');
    // const [click,setClick] = useState(false)

  
    const navToggle =() => {
       active === 'menu_list_contaniers'
        ? setActive("menu_list_contaniers nav_active")
        : setActive("menu_list_contaniers")


        toggleIcon ===  'menu_toggler'
        ? setToggleIcon("menu_toggler toggle")
        : setToggleIcon("menu_toggler")
    };


    return (
        <div className="menu_contaniers">
         <h1 style={{color:'#70e1f5',paddingLeft:12}}>WRISTFLEX</h1> 
        
         
         <ul className= {active}
        //  this makes the nav go back without displaying list items
         onClick={() => {
             setActive("menu_list_contaniers")
              setToggleIcon("menu_toggler")}}>
         
             <li ><NavLink  className="nav_link" to="/">Home</NavLink></li>
            <li><NavLink className="nav_link"  to="/Login">Login</NavLink></li>
            <li><NavLink  className="nav_link"  to="/Register">Register</NavLink></li>
            <li><NavLink  className="nav_link" to="/Demo">Demo</NavLink></li>
             </ul>
             
        <div onClick={navToggle}  className ={toggleIcon}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
        </div>
        </div>
        
        )
        
}

export default NavBar;
