import React from 'react';

const Row = (props) => {

    const list = props.left;
    const info = props.right;

    return(
        <div className="data">
            {list}
            {info}
        </div>
    );
}

export default Row;