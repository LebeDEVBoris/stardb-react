import React from 'react';
import {Link} from 'react-router-dom';

import './Header.sass';

const Header = () => {
    return(
        <header className="header">
            <div className="header__row">
                <div className="header__logo"><Link to="/">StarDB</Link></div>
            </div>
            <div className="header__navbar">
                <ul>
                    <li><Link to="/people">People</Link></li>
                    <li><Link to="/planets">Planets</Link></li>
                    <li><Link to="/starships">Starships</Link></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;