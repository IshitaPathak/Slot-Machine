import React from 'react';





const SEqual = (props) => {
    return (<>
    <div className="inner-slot">
    <h1> {props.x} {props.y} {props.z} </h1>
    <h1>This is matching</h1>
    <hr />
    </div>
    </>);    
}

export default SEqual;