import React from 'react';
import Spinner from '../assets/spinner.gif';

const fullPageLoader = () => {
    return(
        <div className="fp-container">
            <h3>Loading</h3>
            <img width="250px" height="250px" src={Spinner} className="fp-loader" alt="loading"/>
        </div>
    )
}

export default fullPageLoader