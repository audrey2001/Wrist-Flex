import React from 'react';
import "../components/Home-nav-component/navbar.css";
import "./login.css";
import Footer from "./Footer"
import { Link } from 'react-router-dom';

// import NavBar from './NavBar';

const Register = () => {
  // const [user,setUser] = useState(user);


  // useEffect(() =>{
  //   localStorage.setUser('user',JSON.stringify(user))
  // })
return (
  <div>
      <div className="register_contanier">
      <form class="register_form_container">
          
        <h5 style={{color: "black", marginTop: 50}}>Order now, Cancel anytime</h5>
        <h1 >Flex IT</h1>

        <div class="register_form_input">
        <input type="text" placeholder="First Name*" name="first name" />
        <input type="text" placeholder="Last Name*"  
        className= "user_inputted_name"
        onChange ={(e) => e.target.value}
         />
        <input type="email" placeholder="Email*" name="email" required />
        <input type="password" placeholder="Password*" name="password" required  />
        <input type="password" placeholder="Verify Password*" name="password" required  />      
         <button type="submit" class="register_button">
           <Link to ="/Login" style={{textDecoration: "none",color:"white",fontSize:15}}>Register</Link></button>
        </div>
        <p style={{padding :30, fontSize:10, color:"gray" }}>By signing up, you agree to our <span style={{color:"#70e1f5",cursor:"pointer"}}>Terms of Use </span>and <span style={{color:"#70e1f5",cursor:"pointer"}}>Privacy</span></p>
        <div className ="register_footer"></div>
        <p style={{marginTop :20, fontSize:12}}>Already have an account? 
        <span>
        <Link to ="/Login" className="prev_links">Login</Link></span></p>

{/* style={{color:"#70e1f5",textDecoration:"underline",fontSize:18,cursor:"pointer",marginLeft:5, borderBottom:0}}
to="./Login">Login</NavLink></span></p>
         */}
  </form>
    </div>
    <Footer/>
    </div>
  )
}

export default Register
