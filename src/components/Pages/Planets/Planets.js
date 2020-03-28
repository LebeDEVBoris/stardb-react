import React, {Component} from 'react';
import PlanetsList from './../../SWComponents/Planets/PlanetsList';
import PlanetsInfo from './../../SWComponents/Planets/PlanetsInfo';
import Row from './../../Row/Row';

class Planets extends Component {

    state = {
        selectedItem: null
    }

    onItemSelected = (id) => {
        this.setState({selectedItem: id});
    }

    render() {
        return(
            <Row
                left={<PlanetsList onItemSelected={this.onItemSelected}/>}
                right={<PlanetsInfo selectedItem={this.state.selectedItem}/>}
            />
        );
    }
}

export default Planets;