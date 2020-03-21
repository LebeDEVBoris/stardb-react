import React, {Component} from 'react';

import './PersonDetails.sass';

export default class PeopleDetails extends Component {

    render() {
        return(
            <div className="peopleDetails">
                <div className="peopleDetails__inner">
                    <div className="peopleDetails__img">
                        <img src="https://starwars-visualguide.com/assets/img/characters/3.jpg" alt="people_img"></img> 
                    </div>
                    <div className="peopleDetails__info">
                        <div className="peopleDetails__title">R2-D2</div>
                        <div className="peopleDetails__gender">Gender: male</div>
                        <div className="peopleDetails__birth">Birth Year: 43</div>
                        <div className="peopleDetails__eye">Eye color: red</div>
                    </div>
                </div>
            </div>
        );
    }
}