import React, { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

const HomePage = () => {
  const [info, setInfo] = useState([])

  const fetchInfo = async () => {
    const response = await axios.get(
      "https://sdg-staff-directory-app.herokuapp.com/api/HomelessMagicians/Employees"
    )
    setInfo(response.data)
    console.log(response.data, "info")
  }

  return (
    <>
      <h1>Home Page!!!</h1>
    </>
  )
}

export default HomePage
