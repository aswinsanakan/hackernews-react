import React, {Component} from 'react'
import '../css/logo.css'
import NavBar from './nav_bar'

class Logo extends Component {
  render () {
    return (
      <div>
        <h2>
          <a href="/">HackerNews</a> <sup>{'{'}React{'}'}</sup>
        </h2>
        <NavBar />
      </div>
    )
  }
}

export default Logo