import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

// Common styles
import './../../common.sass'

// Relation styles
import './App.sass';

// Components
// import Header from './../Header/Header';
import RandomPlanet from './../RandomPlanet/RandomPlanet';
import Welcome from './../Welcome/Welcome';
import Planets from './../Pages/Planets/Planets';

import SWAPIService from './../../services/SWAPIService';
import {SWAPIServiceProvider} from './../../context/SWAPIServiceContext';

class App extends Component {

    swapi = new SWAPIService();


    render() {

        return(
            <SWAPIServiceProvider value={this.swapi} >
                <div className="app">
                    <Planets />
                </div>
            </SWAPIServiceProvider>
        );
    }
}

export default App;