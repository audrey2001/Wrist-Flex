import React,{useState, Fragment} from 'react'
import watches from "./watches"
import "./demo.css";
import Scroll from "./Scroll"


const List = () => {
    const[query,setQuery] =useState("")
    
    return (
        <Fragment>
   
   {/* the card-list items */}

    <div className="list-card-style" >
            <h2> Shop Now</h2>
                {/* the searchbox */}
         <div className='tc'>
            <input className='tc search' type ='text' placeholder='Rolex , Cartier...'
            onChange= {event => setQuery(event.target.value)}/>
            </div>

                {/* to display and find individual elements */}
            <Scroll>
                {watches.filter(watch =>{
                    if (query === ""){
                        return watch;
                    }
                    else if(watch.title.toLowerCase()
                    .includes(query.toLowerCase())) {
                    return watch
                    } 
                    
                }).map((watch) => (
            <div className ="bg-white dib pa2 br2 ma4 bw2 shadow-5 grow tc design" key={watch.id}>
                
                    <div>                       
                    <img style={{objectFit:"contain",height:200,width:200}}alt ="watch-img"  src={`https://drive.google.com/uc?export=download&id=${watch.keyId}`}/>
                    </div>
                    <div style={{display:"flex",justifyContent:"space-between",paddingTop:25}}>
                        <p>{watch.title}</p>
                        <p>{watch.price}</p>
                    </div>
            </div>
        ))}
        </Scroll>
            </div>
           </Fragment>
    )}
export default List


      