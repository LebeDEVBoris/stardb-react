import React, {Component} from 'react';

import SWAPIservice from './../../services/SWAPIservice';

import './RandomPlanet.sass';

import './../Spinner/Spinner';
import Spinner from './../Spinner/Spinner';
import ErrorIndicator from './../ErrorIndicator/ErrorIndicator';


const RandomPlanetView = ({planet}) => {

    const {id, title, population, rotationPeriod, diameter} = planet;
    const imgSrc = `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`

    return(
        <div className="randomPlanet__inner">
            <div className="randomPlanet__img">
                <img src={imgSrc} alt="planet_img"></img>
            </div>
            <div className="randomPlanet__info">
                <div className="randomPlanet__title randomPlanet__detail">{title}</div>
                <div className="randomPlanet__population randomPlanet__detail">Population: {population}</div>
                <div className="randomPlanet__rotationPeriod randomPlanet__detail">Rotation Period: {rotationPeriod} </div>
                <div className="randomPlanet__diameter randomPlanet__detail">Diameter: {diameter} </div>
            </div>
        </div>
    );
}

export default class RandomPlanet extends Component {

    constructor() {
        super();
        this.updatePlanet();
    }

    state = {
        id: null,
        title: null,
        population: null,
        rotationPeriod: null,
        diameter: null,
        loading: true,
        error: false
    };

    onPlanetLoaded = (planet) => {
        this.setState({
            id: planet.id,
            title: planet.title,
            population: planet.population,
            rotationPeriod: planet.rotationPeriod,
            diameter: planet.diameter,
            loading: false,
            error: false
        });
    }

    onError = (err) => {
        this.setState({
            loading: false,
            error: true
        });
        console.log(`${err}`);
    }

    SWAPI = new SWAPIservice();

    updatePlanet() {
        // Math.floor(Math.random()*18)+4
        this.SWAPI.getPlanet(Math.floor(Math.random()*18)+4)
        .then((planet) => {
            this.onPlanetLoaded(planet);
            //console.log(planet);
        })
        .catch((err) => {
            this.onError(err);
        });
    
    }

    render() {
        const {loading, error} = this.state;

        const spinner = (loading && !error)? <Spinner /> : null;
        const content = !(loading || error) ? <RandomPlanetView planet={this.state}/> : null;
        const wasError = error ? <ErrorIndicator /> : null;
        return(
            <div className="randomPlanet">
                {spinner}
                {wasError}
                {content}
            </div>
        );
    }
}
