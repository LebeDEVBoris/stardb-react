import React, {Component} from 'react';

import './../../reset.css';
import './../../common.sass';

import  Header from './../Header/Header';
import RandomPlanet from './../RandomPlanet/RandomPlanet';
import PeopleList from './../PeopleList/PeopleList';
import PersonDetails from './../PeopleDetails/PeopleDetails';

export default class App extends Component {

    render() {

        // https://swapi.co/api/people/7/
        
        return(
            <div className="app">
                <Header />
                <RandomPlanet />
                <div className="peopleInfo">
                    <PeopleList />
                    <PersonDetails id={2}/>
                </div>
            </div>
        );
    }
}