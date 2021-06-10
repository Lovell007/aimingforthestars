import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div id="navBar">
      <Link to="/solarSystem">Solar System</Link>
      <Link to="/">Planet Creator</Link>
      <Link to="/planetaryList">Planetary List</Link>
    </div>
  )
}
