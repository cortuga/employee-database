import React, { Component } from "react"
import HomePage from "./pages/HomePage"
import EmployeeDetailsPage from "./pages/EmployeeDetailsPage"
import About from "./pages/About"
import EmployeeListPage from "./pages/EmployeeListPage"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import EmployeeDetailsPage from "./pages/EmployeeDetailsPage"

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>

            <Route path="/pages/HomePage" exact component={Home} />

            <Route path='/pages/About' component={About} />

            <Route path='/pages/EmployeeListPage' component={EmployeeListPage} />

            <Route path='/pages/EmployeeDetailsPage' component={EmployeeDetailsPage}

          </Switch>
        </Router>
      </>
    )
  }
}

export default App

src\pages\HomePage.js
