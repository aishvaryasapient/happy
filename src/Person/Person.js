import React from 'react';

const Person = (props)=>{
    return (
        <div className="Card">
            <h3>Name:{props.name}</h3>
            <h5>Age: {props.age}</h5>
            <h5> Town: {props.town}</h5>
    <p>{props.children}</p>
        </div>
    )
}

export default Person