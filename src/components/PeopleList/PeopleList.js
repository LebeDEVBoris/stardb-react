import React, {Component} from 'react';

import './PeopleList.sass';

import SWAPIservice from './../../services/SWAPIservice';

import Spinner from './../Spinner/Spinner';

export default class PeopleList extends Component {

    SWAPI = new SWAPIservice();

    state = {
        peopleList: null
    }

    componentDidMount() {
        this.SWAPI.getPeopleList().then((res) => {
            this.setState({peopleList: res});
        });
    }

    
    renderItems = (data) => {
        const regEx = /\/([0-9]*)\/$/;
        return data.map((elem) => {
            const id = elem.url.match(regEx);
            return(
                <li key={id}>
                    {elem.name}
                </li>
            );
        });
    }

    render() {
        
        const {peopleList} = this.state;

        if (!peopleList) {
            return (<Spinner />);
        }

        const data = this.renderItems(peopleList);
        
        console.log(this.state.peopleList);
        return( 
            <div className="peoplelist">
                <ul>
                    {data}
                </ul>
            </div>
        );
    }
}