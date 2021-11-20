import React, { useEffect, useState } from 'react'
import { getIss } from '../spaceapi'

function CalcHomeo (props) {
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')
  const [planet, setPlanet] = useState('')
  const [medicineAmount, setMedicineAmount] = useState(0)
  const illness = props.illness
  console.log(props, "props")
  const planetArr = ["Mercury", "Venus", "Mars", "Earth", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto (which is a planet)"]


  useEffect(() => {
    onLoad()
  }, [illness])

  const onLoad = () => {
    getIss()
      .then(res => {
        console.log(res)
        setLatitude(res.iss_position.latitude)
        setLongitude(res.iss_position.longitude)
        setPlanet(planetArr[Math.floor(Math.random() * planetArr.length)])
        return null
      })
      .then(() => {
        const long = parseInt(longitude)
        const lat = parseInt(latitude)
        return { long, lat }
      })
      .then(position => {
        setMedicineAmount(Math.pow(position.long, position.lat))
        return null
      })
      .catch(err => console.log(err))
  }

  return (
    <>
      <h1>{illness}'s Dose Calculation</h1>
      <p>The orbiting star is currently at latitude: {latitude} & longitude: {longitude}</p>
      <p>The orbiting star's position is most aligned with {planet}</p>
      <p>As such your optimal dose of {illness} medicine is 0.00000{medicineAmount}</p>
    </>
  )
}

export default CalcHomeo
