import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Destination from './destination.jsx';

function FinalDest(){
    return(
        <div className="page-wrapper">
            <Header/>
            <main className="page-content">
                <Destination />
            </main>
            <Footer/>
        </div>
    )
}

export default FinalDest;