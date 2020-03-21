import React from 'react';
import icon from './death-star.png';
import './ErrorIndicator.sass';

const ErrorIndicator = () => {

    return(
        <div className="errorIndicator">
            <div className="errorIndicator__img">
                <img src={icon} className="errorIndicator" alt="errorIndicator"></img>
            </div>
            <div className="errorIndicator__info">
                <p className="errorIndicator__boom">BOOM!</p>
                <p className="errorIndicator__wrong">Something went wrong. (But we already sent drones to fix it.)</p>
            </div>
        </div>
    );
}

export default ErrorIndicator;