import React from 'react';

const CardList = props => {
    return (
        <div>
            <img src={props.image} />
            <h3>{props.name}</h3>
        </div>
    )
}

export default CardList;