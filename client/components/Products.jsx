import React,{ useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Soap from './Soap'
import Shampoo from './Shampoo'
import Nailpolish from './Nailpolish'

function Products () {
  console.log('products')
  const [product, setProduct] = useState(0)
  function soapClick(){
setProduct(1)
  }
  function shampooClick(){
setProduct(2)
  }
  function nailpolishClick(){
setProduct(3)
  }

    return (
    <>
      <Header />
      <h1>
        Hellooo
        <span />
        {' '}Product{' '}
        <span />
      </h1>
      
         <button onClick={soapClick}>Soap</button>  
         <button onClick={shampooClick}>Shampoo</button>  
         <button onClick={nailpolishClick}>Nailpolish</button> 
         {product === 1
         ? <Soap />
        : product === 2
        ? <Shampoo />
        : product === 3
        ? <Nailpolish />
        : <p>Waiting for your product choice</p>}                
       
    </>
  )
}

export default Products