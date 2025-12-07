import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Home from './home.jsx';

function FinalHome(){
    return(
        <div className="page-wrapper">
            <Header/>
            <Home/>
            <Footer/>
       </div>
    )
}

export default FinalHome;