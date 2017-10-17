import React, {Component} from 'react'
import NavBar from './nav_bar'
import StoryList from './story_list'
import { Route, Switch} from 'react-router-dom'

class StoryBoard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      choice: 'top'
    }
  }

  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" render={() => (
            <div> Welcome ! Choose a category. </div>
          )} />
          <Route path="/:selectChoice" render={({match}) => (
            <StoryList choice={match.params.selectChoice} />
          )}/>
        </Switch>
      </div>
    )
  }

}


export default StoryBoard

