import React from 'react'
import { Link } from 'react-router-dom'

//         
function Header () {
  console.log('header')
  return (
    <>
    <nav>
      <div className='ribbon'>
        <button className="button"><Link to={'/'}>Kelly & Kelly</Link></button>
        <button className="button"><Link to={'/tarot'}>Future Troubles?</Link></button>
        <button className="button"><Link to={'/product'}>Need Stuff?</Link></button>
        <button className="button"><Link to={'/homeo'}>Feeling Unwell?</Link></button>
      </div>
    </nav>
    </>
  )
}

export default Header