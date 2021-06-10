import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { newPlanet } from "../services/api"
import textures from "../textures.json"

export default function NewPlanet() {
  const [name, setName] = useState('')
  const [mass, setMass] = useState('')
  const [selectedTexture, setSelectedTexture] = useState('')
  const [elementalComposition, setElementalComposition] = useState('')
  const [moons, setMoons] = useState('')
  const [description, setDescription] = useState('')
  const history = useHistory


  const handleSubmit = async (e) => {
    e.preventDefault()
    const createNewPlanet = {
      name,
      mass,
      selectedTexture,
      elementalComposition,
      moons,
      description
    }
    const res = await newPlanet(createNewPlanet)
    history.push("/solarSystem")
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Planet Name</label>
          <input type="text" value={name}
          onChange={(e) => setName(e.target.value)}/>
        <br />
        <label>Mass</label>
          <input type="text" value={mass}
          onChange={(e) => setMass(e.target.value)}/>
        <br />
        <label>Texture</label>
        <select value={selectedTexture}
          onChange={(e) => setSelectedTexture(e.target.value)}>
          {textures.map((texture) => (
            <option>{texture.name}</option>
          ))}
        </select>
        <br />
        <label>Elemental Composition</label>
          <input type="text" value={elementalComposition}
          onChange={(e) => setElementalComposition(e.target.value)}/>
        <br />
        <label>Moons</label>
          <input type="text" value={moons}
          onChange={(e) => setMoons(e.target.value)}/>
        <br />
        <label>Description</label>
          <input type="text" value={description}
          onChange={(e) => setDescription(e.target.value)} />
        <button type="submit">Create Your Planet</button>
      </form>
    </div>
  )
}
