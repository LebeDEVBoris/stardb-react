import React, {Component} from 'react';

import './ItemList.sass';

class ItemList extends Component {

    render() {
        const data = this.props.data;
        const content = data.map((elem) => {
            return(
            <li 
                key={elem.id}
                onClick={() => this.props.onItemSelected(elem.id)}>
                    {elem.name}
            </li>
            );
        });
        return (
            <div className="data__list">
                <ul>
                    {content}
                </ul>
            </div>
        );
    }
}

export default ItemList;