import React, { useState, useEffect } from "react"
import axios from "axios"

const EmployeeListPage = () => {
  const fetchEmployees = async () => {
    const resp = await axios.get(
      `https://sdg-staff-directory-app.herokuapp.com/api/CoreysPeeps`
    )
  }

  return (
    <>
      <div>
        <p>Emp list page</p>
      </div>
    </>
  )
}

export default EmployeeListPage
