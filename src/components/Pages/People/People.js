import React, {Component} from 'react';
import ItemList from '../../Row/ItemList/ItemList';
import ItemInfo from '../../Row/ItemInfo/ItemInfo';
import Row from './../../Row/Row';
import withData from '../../hocs/withData';
import SWAPIService from '../../../services/SWAPIService';

const SWAPI = new SWAPIService();

class People extends Component {

    state = {
        selected: null
    }


    onItemSelected = (id) => {
        this.setState({selected: id});
    }

    render() {
        console.log('state = ', this.state.selected);
        const PeopleInfo = withData(ItemInfo, SWAPI.getPeople, this.state.selected);
        return(
            <Row 
                left={<PeopleList onItemSelected={this.onItemSelected}/>} 
                right={<PeopleInfo onItemSelected={this.state.selected}/>}
            />
        );
    }
}

const PeopleList = withData(ItemList, SWAPI.getAllPeople);

export default People;