import React from "react"
import './App.css'
import Header from './assets/components/Header/Header'
import Homepage from "./assets/components/Homepage"
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return(
    <Router>
      <Header />
      <Switch>
        <Homepage />
      </Switch>
    </Router>
  )
}

export default App
