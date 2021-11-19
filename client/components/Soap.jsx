import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import data from '../productdata.json'

function Soap() {
  console.log('tarot')
  return (
    <>
    <div className="productcontainer">
  <div className="soap1"></div>
  <div className="container1">
    <div className="heart"></div>
  </div>
</div>
    {data.map((el, i) => {
        const image = el.image_link
        if (el.category == 'pencil'){
        return <img key={i}src={`${image}`} />
        } else null
    })}
    </>
  )
}

export default Soap