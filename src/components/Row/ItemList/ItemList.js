import React from 'react';

import Spinner from './../../Spinner/Spinner';
import './ItemList.sass';


const ItemList = (props) => {

    const content = props.data.map((elem) => {
        return(
            <li key={elem.id}>
                {elem.name}
            </li>
        );
    });

    return(
        <div className="data__list">
            <ul>
            
            </ul>
        </div>
    );
}

export default ItemList;