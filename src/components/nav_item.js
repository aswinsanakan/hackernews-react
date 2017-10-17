import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class NavItem extends Component {

  render() {
    return(
        <li>
          <Link to={`/${this.props.choice}`}>
            <h5>{this.props.choice}</h5>
          </Link>
        </li>
    )
  }

}

export default NavItem