import React from 'react';
import img from './../../../images/death-star.png';
import './CommonError.sass';

const CommonError = () => {
    return(
        <div className="commonerror">
            <div className="commonerror__img">
                <img src={img} alt="commonerror"></img>
            </div>
            <div className="commonerror__text">
                <div className="commonerror__title">BOOM!</div>
                <div className="commonerror__desc">
                    It seems that something gone wrong. (But we already sent drones to fix it!)
                </div>
            </div>
        </div>
    );
}

export default CommonError;