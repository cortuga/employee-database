import React, { Component } from "react"
import HomePage from "./components/pages/HomePage"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import EmployeeDetailsPage from "./components/pages/EmployeeDetailsPage"

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <switch>
            <Route path='./components/pages/HomePage' exact component={Home} />
            <Route path='/' EmployeeDetailsPage />
            <Route path='' component={About} />
          </switch>
        </Router>
      </>
    )
  }
}

export default App
