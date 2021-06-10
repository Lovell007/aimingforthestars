import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { getPlanetCard } from "../services/api"
import EditMoons from './EditMoons'

export default function PlanetCard() {
  const [planet, setPlanet] = useState('')
  const {id} = useParams()

  useEffect(() => {
    const fetchPlanet = async () => {
      const res = await getPlanetCard(id)
      console.log(res)
      setPlanet(res)
    }
    fetchPlanet()
  }, [])

  const massCalculator = `${planet.fields?.mass}` * 1423



  return (
    <div>
      <p id="pcn">{planet.fields?.planetName}</p>
      <p id="pcm">Diameter {massCalculator} miles</p>
      <p id="pce">Composition {planet.fields?.elementalComposition}</p>
      <p id="pcMoons">Moons {planet.fields?.moons}</p>
      <Link to="/planet/:id/moons">
        <EditMoons />
      </Link>
      <p id="pcmd"></p>
      <p id="pcd">{planet.fields?.description}</p>
    </div>
  )
}
