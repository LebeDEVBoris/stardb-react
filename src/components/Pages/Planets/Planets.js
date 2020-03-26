import React, {Component} from 'react';
import ItemList from '../../Row/ItemList/ItemList';
import ItemInfo from '../../Row/ItemInfo/ItemInfo';
import Row from './../../Row/Row';
import withData from '../../hocs/withData';
import SWAPIService from '../../../services/SWAPIService';

const SWAPI = new SWAPIService();

class Planets extends Component {

    state = {
        selected: null
    }

    onItemSelected = (id) => {
        this.setState({selected: id});
    }

    render() {
        const PlanetInfo = withData(ItemInfo, SWAPI.getPlanet, this.state.selected);
        return(
            <Row 
                left={<PlanetsList onItemSelected={this.onItemSelected}/>} 
                right={<PlanetInfo onItemSelected={this.state.selected}/>}
            />
        );
    }
}

const PlanetsList = withData(ItemList, SWAPI.getAllPlanets);

export default Planets;