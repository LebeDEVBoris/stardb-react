import React, {Component} from 'react';
import PlanetsList from './../../SWComponents/Planets/PlanetsList';
import Row from './../../Row/Row';

class Planets extends Component {

    render() {
        return(
            <>
                <h1>Planets</h1>
                <Row
                    // <h1>h1</h1>
                    left={<PlanetsList />}
                    right={<h1>Right</h1>}
                />
            </>
        );
    }
}

export default Planets;