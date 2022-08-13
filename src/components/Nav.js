import React from 'react'
import image from './airbnb.png'

export default function Nav() {
  return (
    <nav>
        <img id='img' src={image} alt='airbnb logo' width='100px'/>
    </nav>
  )
}
