import React from "react"
import { link } from "react-router-dom"

const NavBar = () => {
  const navStyle = {
    color: "white"
  }

  return (
    <nav>
      <ul>
        <Link to='/pages/HomePage'>
          <li>Home</li>
        </Link>
        <Link to='/pages/About.js'>
          <li>About</li>
        </Link>
        <Link to='/about'>
          <li>Our Employees</li>
        </Link>
      </ul>
    </nav>
  )
}

export default NavBar
