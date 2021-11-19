import React from 'react'
import { Link } from 'react-router-dom'

//         
function Header () {
  console.log('header')
  return (
    <>
    <nav>
      <div className='ribbon'>
        <button><Link to={'/'}>Kelly & Kelly</Link></button>
        <Link to={'/tarot'}>Future Troubles?</Link>
        <Link to={'/product'}>Need Stuff?</Link>
        <Link to={'/homeo'}>Feeling Unwell?</Link>
      </div>
      <div className='header'>
      </div>
    </nav>
    </>
  )
}

export default Header