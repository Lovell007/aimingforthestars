import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { getPlanetList } from "../services/api"

export default function PlanetList() {
  const [planets, setPlanets] = useState([])

  useEffect(() => {
    const fetchPlanets = async () => {
      const res = await getPlanetList();
      setPlanets(res)
      console.log(res)
  };
    fetchPlanets();
  }, [])


  return <div>
      {planets.map((planet) => {
        return <div key={planet.id}>
          <Link to={`/planet/${planet.id}`}>
            {/* <p>{planet.image}</p> */}
            <p>{planet.fields.planetName}</p>
          </Link>
        </div>
      })}
    </div>
}
