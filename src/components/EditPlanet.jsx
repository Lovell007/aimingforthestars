import React, { useState } from 'react'
import textures from "../textures.json"

export default function EditPlanet() {
  const [planetName, setPlanetName] = useState('')
  const [mass, setMass] = useState('')
  const [selectedTexture, setSelectedTexture] = useState('')
  const [elementalComposition, setElementalComposition] = useState('')
  const [moons, setMoons] = useState('')
  const [description, setDescription] = useState('')
  const [solarSystem, setSolarSystem] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault()
    
    
  }

  return (
    <div id="planetForm">
      <form onSubmit={handleSubmit}>
        <p>Planet Name</p>
        <input
          type="text"
          value={planetName}
          onChange={(e) => setPlanetName(e.target.value)}
        />
        <br />
        <p>Mass {mass}</p>
        <input
          type="range"
          min="1"
          max="25"
          step="1"
          value={mass}
          onChange={(e) => setMass(e.target.value)}
        />
        <br />
        <p>Texture</p>
        <select
          id="textureDB"
          value={selectedTexture}
          onChange={(e) => setSelectedTexture(e.target.value)}
        >
          {textures.map((texture) => (
            <option>{texture.textureName}</option>
          ))}
        </select>
        <br />
        <p>Elemental Composition</p>
        <input
          type="text"
          value={elementalComposition}
          onChange={(e) => setElementalComposition(e.target.value)}
        />
        <br />
        <p>Moons</p>
        <input
          type="range"
          min="0"
          max="7"
          step="1"
          value={moons}
          onChange={(e) => setMoons(e.target.value)}
        />
        <br />
        <p>Description</p>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <p>Solar System</p>
        <select
          value={solarSystem}
          onChange={(e) => setSolarSystem(e.target.value)}
        >
          <option>Asgard</option>
          <option>Titan AU</option>
          <option>CR 21</option>
          <option>Raw</option>
        </select>
        <button type="submit">Create Your Planet</button>
      </form>
    </div>
  );
}
