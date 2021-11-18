import React, { useState } from 'react'
import { Route } from 'react-router-dom'

import Header from './Header'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <button onClick={() => setCount(count + 1)}>Click</button>
    </>
  )
}

export default App
