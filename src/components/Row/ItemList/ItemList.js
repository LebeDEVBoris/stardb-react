import React from 'react';

//import Spinner from './../../Spinner/Spinner';
import './ItemList.sass';


const ItemList = (props) => {
    
    const content = props.data.map((elem) => {
        return(
            <li key={elem.id} onClick={() => props.onItemSelected(elem.id)}>
                {elem.name}
            </li>
        );
    });

    return(
        content
    );
}

export default ItemList;