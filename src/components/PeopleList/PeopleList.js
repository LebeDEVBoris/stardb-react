import React, {Component} from 'react';

import './PeopleList.sass';

export default class PeopleList extends Component {

    render() {
        return( 
            <div className="peoplelist">
                <ul>
                    <li>Person 1</li>
                    <li>Person 2</li>
                    <li>Person 3</li>
                    <li>Person 4</li>
                    <li>Person 5</li>
                    <li>Person 6</li>
                    <li>Person 7</li>
                </ul>
            </div>
        );
    }
}