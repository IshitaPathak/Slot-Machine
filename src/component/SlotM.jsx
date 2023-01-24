import React from 'react';
import SMatch from './SMatch';
import SnotMatch from './SnotMatch';

const SlotM = (props) => {

    if (props.x===props.y && props.x===props.z){
      return <SMatch x={props.x} y={props.y} z={props.z} />
    }
    else{
      return <SnotMatch x={props.x} y={props.y} z={props.z} />
    }
  }

  export default SlotM;