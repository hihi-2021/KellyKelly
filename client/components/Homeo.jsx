import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'

function Homeo () {
  console.log('homeo')
  return (
    <>
      <Header />
      <h1>
        Hellooo
        <span />
        {' '}Homeo{' '}
        <span />
      </h1>
    </>
  )
}

export default Homeo