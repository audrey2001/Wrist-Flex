import React from 'react'
import {Link} from 'react-router-dom'
import "../components/Home-nav-component/navbar.css";
import "./login.css";
import Footer from "./Footer"
import Navbar from"../components/Home-nav-component/NavBar"


const Login = () => {

    
    
    return (
      <div>
      <Navbar/>

      <div className="register_contanier">
       
       <form style={{marginTop: -80}} action="/action_page.php" class="register_form_container">
       <h4 className="login_header_text">Login to your WRISTFLEX Account!!</h4> 
       {/* <div style={{marginTop: 20, color:"gray"}} className ="register_footer"></div> */}
        <img style = {{objectFit:"cover",borderRadius: 50, color:"#d1d7dc", marginTop:20}}alt ="avatar" src="https://img.icons8.com/ios/50/000000/user-male-circle.png"></img>
         
         
         {/* targetting the user input and displaying on the page */}
         

         <div  style={{padding:20}}>Welcome to WRISTFLEX</div>


        <div class="register_form_input">
            {/* <form method="POST"> */}
        <input type="password" placeholder="Password*" name="password" /> 
        <button className="login-button" type="submit">
            <Link to ='/Demo' style={{textDecoration: "none",color:"white",fontSize:15}}> Login</Link></button>
            {/* </form> */}
        </div>

        <p style={{padding:20}}>Don't have an account yet? <span >
            <Link to ='/Register' className="prev_links">Register</Link></span> </p>
            {/* <a href ="http://localhost:3000/Register" className="prev_links">
                Register</a></span> </p> */}
          
        </form>
        </div>
        <Footer/>
        </div>
    )

    }
export default Login
