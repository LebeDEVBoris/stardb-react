import React from 'react';

import './ItemInfo.sass';

const ItemInfo = (props) => {
    if ((props.data === null) ||(props.data === undefined)) return(
        <h1 className="caution">Please, choose one of list in left</h1>
    );

    const data = props.data;
    let keys = [];

    const fillKeys = () => {
        for (let key in data) {
            if (key !== 'id' && key !== 'img' && key !== 'name') {
                let str = key[0].toUpperCase() + key.slice(1, key.length + 1 );
                keys.push(str);
            };
        }
    }
    fillKeys();
    const content = keys.map((elem) => {
        const tempString = elem[0].toLowerCase() + elem.slice(1, elem.length+1);
        const tempValue = data[tempString];
        const value = tempValue[0].toUpperCase() + tempValue.slice(1, tempString.length + 1);
        return(
            <li>
                {elem}: {value}
            </li>
        );
    });

    return(
        
        <div className="iteminfo">
            <div className="iteminfo__img">
                <img src={data.img} alt="iteminfo__img"></img>
            </div>
            <div className="iteminfo__info">
            <div className="iteminfo__name">{data.name}</div>
                <ul>
                    {content}
                </ul>
            </div>
        </div>
    );
}

export default ItemInfo;