import React from 'react';
import SEqual from './SEqual';

const SlotM = (props) => {

    if (props.x===props.y && props.x===props.z){
      return <SEqual/>
    }
    else{
      return <>
      <div className="inner-slot">
      <h1> {props.x} {props.y} {props.z} </h1>
      <h1>This is not matching</h1>
      <hr />
      </div>
      </>
    }
  }

  export default SlotM;