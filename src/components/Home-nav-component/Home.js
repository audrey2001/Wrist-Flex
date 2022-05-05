import React,{Fragment} from 'react'
import "./navbar.css";
import Footer from '../Footer';
import { Link } from 'react-router-dom';


const Home = () => {
  const categories =[
    {
      id : 1,
      title :"Rolex",
      imageUrl : "https://drive.google.com/uc?export=download&id=1MZx_2HC-H-MGXc4mRd0GmQSs1xBx1TSc"
},
{
  id : 2,
  title :"Piaget",
  imageUrl : "https://drive.google.com/uc?export=download&id=1RPSU1WPo9rDDQYJa-VrnzeqKVaaTBgP0"

},
{
  id : 3,
  title :"Jaeger-LeCoultre",
  imageUrl : "https://drive.google.com/uc?export=download&id=17ldX0g_leuu-yZdrZilFTaJWCDl0ot3b"

},
{
  id : 4,
  title :"Cartier",
  imageUrl : "https://drive.google.com/uc?export=download&id=11H2vDKDQ1QQPu-tlQYTUAx3owehzsFAB"

},
{
  id : 5,
  title :"Hublot",
  imageUrl : "https://drive.google.com/uc?export=download&id=1gljVNcrqA6iMh1twL2xvdEbemMbCQu6z"

}
  ]
  return ( 
    <Fragment>
    <div className="home-image-contanier">
          <p className ="home_text" >Your FASHION,our PRIDE</p> 
          <p className="home-image-text">we offer quality and affordable wristwatches in a bid to make our customers look classy and exquisite.</p>
          
          <button className="home-image-button">
            <Link to ="/Demo" className ="demo-button-style">Demo</Link>
            {/* <a href ="http://localhost:3000/Demo" style={{textDecoration: "none",color:"white",fontSize:15}}>Demo</a> */}
          </button>
</div>
<h2 style={{textAlign:"center",marginTop:40,letterSpacing:4}}>Our Products</h2>
<div className="categories-contanier">
  
     {categories.map(({title, id, imageUrl}) => (
     <div key = {id} className ="category-contanier" style={{backgroundImage:`url(${imageUrl})`}}>
        <div className ="category-body-contanier background-image" style={{backgroundColor:"white"}}>
          <h2 className="category-h2">{title}</h2>
        
        </div>
      </div>
      
     ))}
</div>
<Footer/>
</Fragment>
  )
}

export default Home
