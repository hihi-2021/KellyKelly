import React from 'react'
import Header from './Header'
import {useSelector } from 'react-redux'
import Card from './Card'


// function randomCard() {

// }

function Tarot ({onClick}) {
  var customerName = useSelector(store => store.home)
  console.log(customerName)
  var customerName = useSelector(store => store.home)
  console.log(customerName)
  if (customerName.length < 1) {
  customerName = 'stranger'
  }


  return (
    <>
      <div className='tarot'>
        <Header />
        <div className = 'tarotreading'>
        <h1>
          Are you ready to have your future read, {customerName}?
        </h1>
        <h3>
          Please draw a card...
        </h3>
          <div className="tarotContainer">
            <Card />
          </div>
        </div>
      </div>
    </>
  )
}

export default Tarot