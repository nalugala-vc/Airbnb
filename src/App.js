import Nav from './components/Nav';
import './App.css';
import Photogrid from './components/Photogrid';
import Card from './components/Card';
import React from 'react'
import data from './data'

export default function App() {
  const dataComp=data.map(function(myData){
    return(
      <Card
        key={myData.id}
        myData={myData}
        />
    )
  })
  return (
    <>
    <Nav/>
    <section className='section'>
    <Photogrid/>
    <section className='container'>
      {dataComp}
    </section>
    </section>
    </>
  )
}


