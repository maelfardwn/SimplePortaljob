import React from 'react';
import Spinner from '../assets/spinner.gif';

const fullPageLoader = () => {
    return(
        <div className="fp-container">
            <img src={Spinner} className="fp-loader" alt="loading"/>
        </div>
    )
}

export default fullPageLoader