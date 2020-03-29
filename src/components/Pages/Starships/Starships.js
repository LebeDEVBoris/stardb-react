import React, {Component} from 'react';
import StarshipsList from './../../SWComponents/Starships/StarshipsList';
import StarshipsInfo from './../../SWComponents/Starships/StarshipsInfo';

import Row from './../../Row/Row';

class Starships extends Component {

    state = {
        selectedItem: null,
        selectedPage: 1
    }

    onItemSelected = (id) => {
        this.setState({selectedItem: id});
    }


    render() {
        return(
            <Row
                left={<StarshipsList onItemSelected={this.onItemSelected}/>}
                right={<StarshipsInfo selectedItem={this.state.selectedItem}/>}
            />
        );
    }
}

export default Starships;