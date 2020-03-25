import React from 'react';

import './Header.sass';

const Header = () => {
    return(
        <header className="header">
            <div className="header__row">
                <div className="header__logo">StarDB</div>
            </div>
            <div className="header__navbar">
                <ul>
                    <li><a href="vk.com">People</a></li>
                    <li><a href="vk.com">Planets</a></li>
                    <li><a href="vk.com">Starships</a></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;