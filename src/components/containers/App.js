import React, { Component } from 'react'
import Home from '../views/Home'
import About from '../views/About'
import Education from '../views/Education'
import Work from '../views/Work'

export default class App extends Component {
  render() {
    return (
      <>
        <Home />
        <About />
        <Education />
        <Work />
      </>
    )
  }
}
