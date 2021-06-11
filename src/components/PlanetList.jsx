import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { getPlanetList } from "../services/api"
import textures from "../textures.json"

export default function PlanetList() {
  const [planets, setPlanets] = useState([])
  const [planet, setPlanet] = useState('')

  useEffect(() => {
    const fetchPlanets = async () => {
      const res = await getPlanetList();
      setPlanets(res)
      console.log(res)
  };
    fetchPlanets();
  }, [])

  // {
  //   planets.map((planet) => {
      
  //     const foundTexture = textures.find(texture => texture.textureName === planet?.fields?.selectedTexture)
  // })}
  
  return <div>
      {planets?.map((planet) => {
        return <div key={planet.id}>
          <Link to={`/planet/${planet.id}`}>
          {/* <p><img src={`../${foundTexture.map}`} id="planetListImg"/></p> */}
            <p>{planet.fields.planetName}</p>
          </Link>
        </div>
      })}
    </div>
}
