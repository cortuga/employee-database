import React from "react"
import { Link } from "react-router-dom"

const NavBar = () => {
  const navStyle = {
    color: "white"
  }
  return (
    <nav>
      <ul>
        <Link style={navStyle} to='/pages/HomePage'>
          <li>Home</li>
        </Link>
        <Link style={navStyle} to='/pages/About.js'>
          <li>About</li>
        </Link>
        <Link style={navStyle} to='/pages/employeeListPage'>
          <li>View All Employees</li>
        </Link>

        <Link to='/AddEmployeePage'>Add Employee</Link>
      </ul>
    </nav>
  )
}

export default NavBar
