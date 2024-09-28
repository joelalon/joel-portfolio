/* Filename: App.jsx
   Student's Name: Joel Alon
   Student ID: 301398424
   Date: Sept. 27, 2024 */

import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import MainRouter from "./MainRouter"

const App = () => {
  return(
    <Router>
      <MainRouter/>
    </Router>
  )
}

export default App