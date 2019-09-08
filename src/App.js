import React, { Component } from "react"
import HomePage from "./pages/HomePage"
import EmployeeDetailsPage from "./pages/EmployeeDetailsPage"
import About from "./pages/About"
import EmployeeListPage from "./pages/EmployeeListPage"
import EmployeeDetailsPage from "./pages/EmployeeDetailsPage"
import AddEmployee from "./pages/AddEmployeePage"
import NavBar from "./components/NavBar"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <NavBar />
          <Switch>
            <Route path='/pages/HomePage' exact component={HomePage}></Route>

            <Route path='/pages/About' component={About}></Route>

            <Route
              path='/pages/EmployeeListPage'
              component={EmployeeListPage}
            ></Route>

            <Route
              path='/pages/AddEmployeePage'
              component={AddEmployee}
            ></Route>

            <Route
              path='/pages/EmployeeDetailsPage'
              component={EmployeeDetailsPage}
            ></Route>
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
