import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// Common styles
import './../../common.sass'

// Relation styles
import './App.sass';

// Services (StarWars API)
import SWAPIService from './../../services/SWAPIService';

// Context
import {SWAPIServiceProvider} from './../../context/SWAPIServiceContext';

// Components
import Header from './../Header/Header';
import RandomPlanet from './../RandomPlanet/RandomPlanet';
import ItemList from '../Row/ItemList/ItemList';
import ItemInfo from '../Row/ItemInfo/ItemInfo';
import Welcome from './../Welcome/Welcome';
import PeopleList from './../Pages/People/PeopleList';
import Row from './../Row/Row';

const App = () => {

    return(
        <Router>
            <div className="app">
                <Header />
                <RandomPlanet />
                <Route path="/" exact component={Welcome}></Route>
                <Route path="/people">
                    <div className="data">
                        <PeopleList />
                    </div>
                </Route>
            </div>
        </Router>
    );
}

export default App;