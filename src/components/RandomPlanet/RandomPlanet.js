import React from 'react';

import './RandomPlanet.sass';

const RandomPlanet = () => {
    return(
        <div className="randomplanet">
            <div className="randomplanet__content">
                <div className="randomplanet__img">
                    <img src="https://starwars-visualguide.com/assets/img/planets/11.jpg" alt="random-planet"></img>
                </div>
                <div className="randomplanet__info">
                    <div className="randomplanet__name">Name: Saturn</div>
                    <ul>
                        <li>Population: 2000000</li>
                        <li>Rotation Period: 123</li>
                        <li>Diameter: 4000</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default RandomPlanet;