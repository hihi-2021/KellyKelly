import React, {useEffect, useState} from 'react'
import { drawCard } from '../actions'
import {useSelect, useDispatch} from 'react-redux'
var nostra = require('nostra')


const Card = () => {
  const [image, setImage] = useState('/tarotimages/back.png')
  const [cardid, setId] = useState()
  const [fortune, setFortune] = useState('')
  const dispatch = useDispatch()

  const generateCard = () => {
    const id = Math.ceil(Math.random() * 4)
    console.log(id)

    setFortune(nostra.generate())

    // setId(id)
    // const action = drawCard(cardid)
    // dispatch(action)

    const location = '/tarotimages/'
    switch(id) {
      case 1:
        setImage(location + 'thedevil.jpg')
        break
      case 2:
        setImage(location + 'thefool.jpg')
        break
      case 3:
        setImage(location + 'thelovers.jpg')
        break
      case 4:
        setImage(location + 'thelovers.jpg')
        break
      default:
        return 
    }
  }

  return (
    <div className="tarotContainer">
      <div onClick={() => generateCard()} >
        <img src={image} className="card"/>
      </div>
      <div className="text" >
        <h2>
          {fortune}
        </h2>
      </div>
    </div>
  )

}

export default Card