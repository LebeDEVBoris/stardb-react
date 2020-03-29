import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// Common styles
import './../../common.sass'

// Relation styles
import './App.sass';

// Components
import Header from './../Header/Header';
import RandomPlanet from './../RandomPlanet/RandomPlanet';
import Welcome from './../Welcome/Welcome';
import Planets from './../Pages/Planets/Planets';
import Starships from './../Pages/Starships/Starships';
import People from './../Pages/People/People';
import Error404 from  './../Errors/Error404/Error404';


import SWAPIService from './../../services/SWAPIService';
import {SWAPIServiceProvider} from './../../context/SWAPIServiceContext';

class App extends Component {

    swapi = new SWAPIService();


    render() {

        return(
            <SWAPIServiceProvider value={this.swapi} >
                <Router>
                <div className="app">
                    <Header />
                    <RandomPlanet />
                    <Switch>
                        <Route path='/' exact component={Welcome} />
                        <Route path='/people' component={People} />
                        <Route path='/planets' component={Planets} />
                        <Route path='/starships' component={Starships} />
                        <Route render={() => <Error404 />} />
                    </Switch>   
                </div>
                </Router>
            </SWAPIServiceProvider>
        );
    }
}

export default App;