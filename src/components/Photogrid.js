import React from 'react'
import image from './photo-grid.png'

export default function Photogrid() {
  return (
    <>
    <div className='photogrid'><img src={image} alt='photogrid' id='photogrid'/></div>
    <div className='info'>
        <h1>Online experiences</h1>
        <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
        </p>
    </div>
    
    </>
  )
}
