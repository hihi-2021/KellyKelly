import React from 'react'
import { Link } from 'react-router-dom'

function Header () {
  console.log('header')
  return (
    <>
      {/* <nav className='nav'>
        <Link to='/'>Homeopathy</Link>
        <Link to='/cart'>Tarot cards</Link>
        <Link to='/orders'>Beauty products</Link>
      </nav> */}
      <h1>
        Hellooo
        <span />
        {' '}Kelly & Kelly{' '}
        <span />
      </h1>
    </>
  )
}

export default Header