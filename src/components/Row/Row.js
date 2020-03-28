import React from 'react';

const Row = (props) => {

    return(
        <div className="data">
            {props.left}
            {props.right}
        </div>
    );
}

export default Row;