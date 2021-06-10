import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { newPlanet } from "../services/api"
import textures from "../textures.json"

export default function NewPlanet() {
  const [planetName, setPlanetName] = useState('')
  const [mass, setMass] = useState('')
  const [selectedTexture, setSelectedTexture] = useState('')
  const [elementalComposition, setElementalComposition] = useState('')
  const [moons, setMoons] = useState('')
  const [description, setDescription] = useState('')
  const history = useHistory


  const handleSubmit = async (e) => {
    e.preventDefault()
    const createNewPlanet = {
      planetName,
      mass,
      selectedTexture,
      elementalComposition,
      moons,
      description
    }
    const res = await newPlanet(createNewPlanet)
    // history.push("/solarSystem")
  }

  console.log(textures)

  return (
    <div id="planetForm">
      <form onSubmit={handleSubmit}>
        <p>Planet Name</p>
          <input type="text" value={planetName}
          onChange={(e) => setPlanetName(e.target.value)}/>
        <br />
        <p>Mass {mass}</p>
          <input type="range" min="1" max="25" step="1" value={mass}
          onChange={(e) => setMass(e.target.value)}/>
        <br />
        <p>Texture</p>
        <select id="textureDB" value={selectedTexture}
          onChange={(e) => setSelectedTexture(e.target.value)}>
          {textures.map((texture) => (
            <option>{texture.textureName}</option>
          ))}
        </select>
        <br />
        <p>Elemental Composition</p>
          <input type="text" value={elementalComposition}
          onChange={(e) => setElementalComposition(e.target.value)}/>
        <br />
        <p>Moons</p>
          <input type="text" value={moons}
          onChange={(e) => setMoons(e.target.value)}/>
        <br />
        <p>Description</p>
          <input type="text" value={description}
          onChange={(e) => setDescription(e.target.value)} />
        <p>
          <button type="submit">Create Your Planet</button>
        </p>
      </form>
    </div>
  )
}
