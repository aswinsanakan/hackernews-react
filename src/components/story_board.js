import React, {Component} from 'react'
import StoryList from './story_list'
import { Route, Switch} from 'react-router-dom'
import '../css/story_board.css'

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
        <Switch>
          <Route exact path="/" render={() => (
            <div className='welcome'> <span role='img' aria-label="HandWave">👋</span> Hey there! Choose a section to start. </div>
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

