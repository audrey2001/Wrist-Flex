import React from 'react'
import "./login.css"

const Footer = () => {
    

    return (
        <div style={{marginTop:35}} className="footer_contanier">
        <h1 style={{color:'white',fontSize: 20, paddingTop:20}}>WRISTFLEX</h1> 
       
        <div className= "social_media_links">
        <a href="#" target="_blank">
              <i className="fa fa-twitter"></i></a>
                <a href="#" target="_blank">
                      <i className="fa fa-google"></i></a>
                    <a href="#" target="_blank">
                           <i className="fa fa-instagram"></i></a>
                         <a href="#" target="_blank">
                              <i className="fa fa-linkedin"></i></a>
                              
    </div>
    <p className="footer-text-ending">© 2022 WRISTFLEX | All rights reserved.</p>
</div>
)
}

export default Footer;

