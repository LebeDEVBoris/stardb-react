import React, {Component} from 'react';

import './Header.sass';

export default class Header extends Component {
    
    render(){
        return(
            <header className="header">
                <div className="header__nav">
                    <div className="header__logo">
                        StarDB
                    </div>
                    <div className="header__links">
                        <a className="header__link" href="1">People</a>
                        <a className="header__link" href="1">Planets</a>
                        <a className="header__link" href="1">Starships</a>
                    </div>
                </div>
            </header>
        );
    }
}