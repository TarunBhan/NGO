import React from 'react'
import Link from 'next/link';
import { CLIENT_RENEG_WINDOW } from 'tls';
const Flexbox = ({name,amount,path}:any) => {

  return (
    <div className='footer-links'>

        <a href={path}>{name}</a>

    </div>
  )
}

export default Flexbox;