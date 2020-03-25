import React from 'react';

import './ItemList.sass';

const ItemList = () => {
    return(
        <div className="data__list">
            <ul>
                <li>Person 1</li>
                <li>Person 2</li>
                <li>Person 3</li>
                <li>Person 4</li>
                <li>Person 5</li>
                <li>Person 6</li>
            </ul>
        </div>
    );
}

export default ItemList;