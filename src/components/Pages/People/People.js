import React, {Component} from 'react';
import PeopleList from './../../SWComponents/People/PeopleList';
import PeopleInfo from './../../SWComponents/People/PeopleInfo';
import Row from './../../Row/Row';

class People extends Component {

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
                left={<PeopleList onItemSelected={this.onItemSelected}/>}
                right={<PeopleInfo selectedItem={this.state.selectedItem}/>}
            />
        );
    }
}

export default People;