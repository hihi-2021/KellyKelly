import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom' 
import Home from './Home'
import Products from './Products'
import Tarot from './Tarot'
import Homeo from './Homeo'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/tarot' element={<Tarot />} />
          <Route exact path='/product' element={<Products />} />
          <Route exact path='/homeo' element={<Homeo />} />
        </Routes>
      </>
    </Router>
  )
}

export default App
