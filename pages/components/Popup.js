import { userInfo } from 'os';
import React from 'react'

function Popup(props) {
  return (props.trigger)?(
    <div className='popup'>
        <div className='inner-popup'>
        <h1>
          {props.name} THANKS FOR DONATING
        </h1>
        <div className='wrapper'></div>
        <button  className="close-button" onClick={()=>props.setTrigger(false)}>Close</button>
    </div>
    </div>
  ):"";
}

export default Popup