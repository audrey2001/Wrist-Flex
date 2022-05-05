import React, { Fragment} from 'react'
import Footer from "../Footer"
import List from "./List"
import ErrorBoundary from "../ErrorBoundary"

const Demo = () => {
    
    return (
        <Fragment>
            <ErrorBoundary>
          <List/>
          </ErrorBoundary> 
          <Footer/>
           </Fragment>
    )
}

export default Demo
