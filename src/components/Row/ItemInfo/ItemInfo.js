import React from 'react';

import './ItemInfo.sass';

const ItemInfo = () => {
    return(
        <div className="iteminfo">
            <div className="iteminfo__img">
                <img src="https://starwars-visualguide.com/assets/img/planets/19.jpg" alt="iteminfo__img"></img>
            </div>
            <div className="iteminfo__info">
                <div className="iteminfo__name">Name: Jupiter</div>
                <ul>
                    <li>Population: 2000000</li>
                    <li>Rotation Period: 123</li>
                    <li>Diameter: 4000</li>
                </ul>
            </div>
        </div>
    );
}

export default ItemInfo;