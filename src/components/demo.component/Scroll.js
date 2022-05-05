import React from 'react'
import "./demo.css"

const Scroll = (props) => {
    return (
        <div>
            {/* doing inline styling */}
        <div className="scroll-item" style ={{overflowY:'scroll',
         border:'1px solid white', height:'600px'}}>
        {props.children}
     </div>
        </div>
    )
}

export default Scroll
