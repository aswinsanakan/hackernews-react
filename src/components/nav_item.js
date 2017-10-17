import React, {Component} from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom'

class NavItem extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        <Link to={`/${this.props.choice}`}>
          {this.props.choice}
        </Link>
      </div>
    )
  }

}

export default NavItem