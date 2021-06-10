import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { getPlanetList } from "../services/api"

export default function PlanetList() {
  const [planets, setPlanets] = useState('')

  useEffect(() => {
    const fetchPlanets = async () => {
      const res = await getPlanetList();
      setPlanets(res)
    };
    fetchPlanets();
  }, [])


  return (
    <div>
      {planets.map((planet) => {
        return <div>
          <Link to={`/planet/${planet.id}`}>
            {/* <p>{planet.image}</p> */}
            <p>{planet.name}</p>
          </Link>
        </div>
      })}
    </div>
  )
}
