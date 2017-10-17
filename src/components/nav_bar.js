import React, {Component} from 'react'
import NavItem from './nav_item'

class NavBar extends Component {
  render () {
    const choices = ['top', 'new', 'best']
    return (
      <div> 
        {
          choices.map((choice) => {
            return(
              <NavItem choice={choice} key={choice}/>
            )
          })
        }
      </div>
    )
  }
}

export default NavBar