import React from 'react';

import './ItemInfo.sass';

const ItemInfo = (props) => {
    
    const { data } = props;
    return(
        <>
            <div className="iteminfo__img">
                <img src={data.img} alt="iteminfo__img"></img>
            </div>
            <div className="iteminfo__info">
            <div className="iteminfo__name">{data.name}</div>
                <ul>
                    {props.content}
                </ul>
            </div>
        </>
    );
}

export default ItemInfo;