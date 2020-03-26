import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

// Common styles
import './../../common.sass'

// Relation styles
import './App.sass';

// Components
import Header from './../Header/Header';
import RandomPlanet from './../RandomPlanet/RandomPlanet';
import Welcome from './../Welcome/Welcome';
import People from '../Pages/People/People';
import Row from './../Row/Row';

class App extends Component {

    render() {
        return(
            <Router>
                <div className="app">
                    <Header />
                    {/* <RandomPlanet /> */}
                    
                    {/* Main Page */}
                    {/* <Route path="/" exact component={Welcome}></Route> */}
    
                    {/* People Page */}
                    <Route path="/people">
                        <People />
                    </Route>
    
                </div>
            </Router>
        );
    }
}

export default App;