import React from 'react'
import Link from 'next/link';

import { CLIENT_RENEG_WINDOW } from 'tls';
const Flexbox = ({name,amount,content}:any) => {

  return (
    <div className='dev-footer'>
   <h1>{name}</h1>
   <p> {content}</p>
   </div>
  )
}

export default Flexbox;