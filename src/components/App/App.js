import React from 'react';

// Common styles
import './../../common.sass'

// Relation styles
import './App.sass';

// Components
import Header from './../Header/Header';
import RandomPlanet from './../RandomPlanet/RandomPlanet';
import ItemList from './../ItemList/ItemList';
import ItemInfo from './../ItemInfo/ItemInfo';

const App = () => {

    return(
        <div className="app">
            <Header />
            <RandomPlanet />
            <div className="data">
                <ItemList />
                <ItemInfo />
            </div>
        </div>
    );
}

export default App;