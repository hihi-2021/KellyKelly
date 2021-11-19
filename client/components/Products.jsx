import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'

function Products () {
  console.log('products')
  return (
    <>
      <Header />
      <h1>
        Hellooo
        <span />
        {' '}Product{' '}
        <span />
      </h1>
    </>
  )
}

export default Products