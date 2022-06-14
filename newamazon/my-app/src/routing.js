import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Component/Home/Home'
import Footer from './footer';




const Routing = () => {
    return(
        <BrowserRouter>
             <Route exact path="/" component={Home}/>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing