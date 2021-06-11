import React from 'react'
import { useState, useEffect } from 'react'
import {getMoonData} from "../services/api"

export default function EditMoons(props) {
  // const [moons, setMoons] = useState([])
  console.log('props', props.moons) 

  // props.moons.map((moon) => {
  //   setMoonId(moon)
  // })


  useEffect(() => {
    const fetchMoons = async () => {
      const res = await getMoonData()
      console.log(res)
      // setMoons('moons', res)
    }
    fetchMoons()
  }, [])

  return (
    <div>
      
    </div>
  )
}
