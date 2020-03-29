import React from 'react';
import img from './../../../images/death-star.png';
import './Error404.sass';

const Error404 = () => {
    return(
        <div className="error404">
            <div className="error404__img">
                <img src={img} alt="commonerror"></img>
            </div>
            <div className="error404__text">
                <div className="error404__title">BOOM!</div>
                <div className="error404__desc">
                    Error 404. Page not found :( (But we already sent drones to fix it!)
                </div>
            </div>
        </div>
    );
}

export default Error404;