import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { getPlanetCard } from "../services/api"
import {getMoonData} from "../services/api"
import textures from "../textures.json"


export default function PlanetCard() {
  const [moonId, setMoonId] = useState('')
  const [planet, setPlanet] = useState('')
  const { id } = useParams()
  const [moons, setMoons] = useState()
  
  
  useEffect(() => {
    const fetchPlanet = async () => {
      const res = await getPlanetCard(id)
      // console.log('planet', res)
      const newMoons = []
      res.fields.moons.forEach( (moon) => {
        console.log(moon)
        const res = getMoonData(moon)
        newMoons.push(res?.fields?.name)
        // const newMoons = moons.push(res)
        // console.log(newMoons)
        // setMoons(prevState => ([...prevState, res]))
      })
      res.moons = newMoons
      setPlanet(res)
      console.log(newMoons)
      setMoons([...newMoons])
    }
    fetchPlanet()
  }, [id])
  console.log(planet.moons)
  const foundTexture = textures.find(texture => texture.textureName === planet?.fields?.selectedTexture)
  console.log(foundTexture)
  // const moonArr = JSON.parse(planet.fields?.moons)
  // console.log(moonArr)
  //   moonArr.map((moon) => {
  //     setMoonId(moon)
    
  // })
  // console.log("moons", moon)

  // useEffect(() => {
  //   const fetchMoons = async () => {
  //     const res = await getMoonData()
  //     // console.log(res)
  //     // setMoons('moons', res)
  //   }
  //   fetchMoons()
  // }, [])
  console.log(moons && moons)
  console.log(planet)
  
  const massCalculator = `${planet.fields?.mass}` * 1423
  
  if (!planet.moons) {
    return <h1>loading...</h1>
  }
  return (
    <div>
      <img src={`../${foundTexture.map}`} id="planetImg"/>
      {/* <div id="planetImg" style={{backgroundImage: `url(../${foundTexture.map})`}}></div> */}
      <p id="pcn">{planet.fields?.planetName}</p>
      <p id="pcm">Diameter {massCalculator} miles</p>
      <p id="pce">Composition {planet.fields?.elementalComposition}</p>
      {/* {moonsArr?.map(moon => <div>{moon.name}</div>)} */}
      {/* {moons?.forEach(moon => (<p key={moon.id}>hello</p>))} */}
      {/* <p></p> */}
      {planet.moons.map(moon => <p>{moon}</p>)}
      {/* <p id="pcMoons">Moons {planet.fields?.moons.map(moon => moon)}</p> */}
     {/* <EditMoons moons={planet.fields?.moons} /> */}
      <p id="pcmd"></p>
      <p id="pcd">{planet.fields?.description}</p>
    </div>
  )
}
