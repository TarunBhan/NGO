import React from 'react'

import Image from 'next/image'
const images = () => {
    const img=[
      './/images-slides/pic2.jpeg',
      './/images-slides/pic3.jpeg'
      ]
      console.log(img[0]);
  return (
    <div>
        {
        img.map((currElem)=>{<div><Image src={currElem} height="400" /> </div>})}
    </div>
  )
}

export default images