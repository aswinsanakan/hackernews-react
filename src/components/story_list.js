import React, {Component} from 'react'
import {create} from 'apisauce'
import Story from './story'


const storiesApi = create({
  baseURL: 'https://hacker-news.firebaseio.com/v0'
})

class StoryList extends Component {
  constructor (props) {
    super(props);
    this.state = {
      stories: []
    }
  }

  componentDidMount() {
    storiesApi.get('/topstories.json')
    .then(response => {
      this.setState({stories: response.data})
    })
    .catch(error => console.log(error))
  }

  render () {
    const topstories = this.state.stories;
    return (
      <div>
        {
          topstories ? (
            <ul>
              {
                topstories.map((story) => {
                  return (
                    <Story story={story} key={story} /> 
                  )
                })
              }
            </ul>
              
          ) : (
            <div>Loading...</div> 
            
          )
        }
      </div>
    )
  }

}

export default StoryList