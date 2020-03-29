import React, {Component} from 'react';

import './RandomPlanet.sass';

import Spinner from './../Spinner/RandomPlanet/Spinner';

import SWAPIService from './../../services/SWAPIService';

class RandomPlanet extends Component {
    
    SWAPI = new SWAPIService();

    state = {
        loading: true,
        data: null,
    }

    update = () => {
        this.setState({loading: true, data: null});
        this.SWAPI.getPlanet(Math.floor(Math.random()*15+2))
                    .then((data) => this.setState({loading: false, data: data}));
    }

    componentDidMount() {
        this.update();
        this.interval = setInterval(this.update, 4000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        
        const data = this.state.data;
        const spinner = this.state.loading ? <Spinner /> : null;
        const content = !this.state.loading ? <RandomPlanetView data={data}/> : null
      
        return(
            <div className="randomplanet">
                <div className="randomplanet__content">
                <div className="randomplanet__title">Random Planet</div>
                    {spinner}
                    {content}
                </div>
                
            </div>
        );
    }
}

const RandomPlanetView = (props) => {
    const data = props.data;
    return(
       
        <div className="randomplanet__data">
            <div className="randomplanet__img">
                <img src={data.img} alt="random-planet"></img>
            </div>
            <div className="randomplanet__info">
                <div className="randomplanet__name">Name: {data.name}</div>
                <ul>
                    <li>Population: {data.population}</li>
                    <li>Rotation Period: {data.rotationPeriod}</li>
                    <li>Diameter: {data.diameter}</li>
                </ul>
            </div>
        </div>
       
    );
}

export default RandomPlanet;