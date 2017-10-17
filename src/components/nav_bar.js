import React, {Component} from 'react'
import NavItem from './nav_item'
import '../css/nav_bar.css'

class NavBar extends Component {
  render () {
    const choices = ['top', 'new', 'best']
    return (
      <div className='nav'> 
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