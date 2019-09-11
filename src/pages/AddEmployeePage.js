import React from "react"

const AddEmployeePage = () => {
  return (
    <main>
      <h2>New Employee Request</h2>
      <body>
        <input type='text' placeholder='First Name'></input>
        <input type='text' placeholder='Last Name'></input>
        <input type='text' placeholder='Job title'></input>
        <button>Submit</button>
      </body>
    </main>
  )
}

export default AddEmployeePage
