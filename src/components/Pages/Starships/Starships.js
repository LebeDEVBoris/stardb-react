import React, {Component} from 'react';
import ItemList from '../../Row/ItemList/ItemList';
import ItemInfo from '../../Row/ItemInfo/ItemInfo';
import Row from './../../Row/Row';
import withData from '../../hocs/withData';
import SWAPIService from '../../../services/SWAPIService';

const SWAPI = new SWAPIService();

class Starships extends Component {

    state = {
        selected: null
    }

    onItemSelected = (id) => {
        this.setState({selected: id});
    }

    render() {
        const StarshipInfo = withData(ItemInfo, SWAPI.getStarship, this.state.selected);
        return(
            <Row 
                left={<StarshipsList onItemSelected={this.onItemSelected}/>} 
                right={<StarshipInfo onItemSelected={this.state.selected}/>}
            />
        );
    }
}

const StarshipsList = withData(ItemList, SWAPI.getAllStarships);

export default Starships;