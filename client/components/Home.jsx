import React, { useState } from 'react'
import Header from './Header'
import { useDispatch } from 'react-redux'

import { enterName } from '../actions'

function Home () {
  const dispatch = useDispatch()
  const [newName, setName] = useState('')
 
  const handleSubmit = (evt) => {
    // dispatch(saveFruit(newFruit))
    const action = enterName(newName)
    dispatch(action)

    evt.preventDefault()
    setName('')
  }

  const handleType = (evt) => {
    setName(evt.target.value)
  }
  console.log('home')
  return (
    <>
      <Header />
      <form onSubmit={handleSubmit} >
        <label htmlFor='name' >Enter Name</label>
        <input type='text' name='name' placeholder='please enter your name' value={newName} onChange={handleType} />
        <button>Submit</button>
      </form>
    </>
  )
}

export default Home