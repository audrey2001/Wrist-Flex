import React, { Fragment} from 'react'
import Footer from "../Footer"
import List from "./List"
import ErrorBoundary from "../ErrorBoundary"
import Navbar from"../Home-nav-component/NavBar"

const Demo = () => {
    
    return (
        <Fragment>
            <Navbar/>
            <ErrorBoundary>
          <List/>
          </ErrorBoundary> 
          <Footer/>
           </Fragment>
    )
}

export default Demo
