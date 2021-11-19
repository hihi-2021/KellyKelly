import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import { useSelector } from 'react-redux'
import CalcHomeo from './CalcHomeo'

function Homeo () {
  const customerName = useSelector(store => store.home)

  const [newIllness, setNewIllness] = useState('')
  const [currentIllness, setCurrentIllness] = useState('')
  let updateIllness = ""

  const handleType = (evt) => {
    setNewIllness(evt.target.value)
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    updateIllness = newIllness
    setCurrentIllness(updateIllness)
    setNewIllness('')
  }

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
      <h2>Welcome {customerName}</h2>
      <p>As we all know, less is more.</p>
      <p>Fusing the latest science in astrophysics with the fundamental wisdom of the ancients we bring to you a modern medicinal solution.</p>
      <h2>Homeostrology</h2>

      <form onSubmit={handleSubmit} >
        <label htmlFor='illness' >Enter Illness</label>
        <input type='text' name='illness' placeholder='please enter your illness' value={newIllness} onChange={handleType} />
        <button>Submit</button>
      </form>

      {currentIllness !== ''
      ? <CalcHomeo illness={currentIllness}/>
      : <p>Awaiting personal information..</p>}
      
    </>
  )
}

export default Homeo