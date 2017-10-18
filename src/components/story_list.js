import React, {Component} from 'react'
import {create} from 'apisauce'
import Story from './story'
import '../css/story_list.css'

const storiesApi = create({
  baseURL: 'https://hacker-news.firebaseio.com/v0'
})

class StoryList extends Component {

  constructor (props) {
    super(props);

    this.state = {
      stories: [],
      storyCount: 0,
      choice: ''
    }
  }

  componentDidMount() {
    const choice = this.props.choice;
    this.getStories(choice);
  }

  componentDidUpdate(prevProps, prevState) {    
    if (prevProps.choice !== this.props.choice) {   
      this.getStories(this.props.choice);   
    }   
  }

  getStories(choice) {
    const limit = 10;
    storiesApi.get(`/${choice}stories.json`)
    .then(response => {
      this.setState({stories: response.data.slice(0,limit), storyCount: response.data.length, choice: choice})
    })
    .catch(error => console.log(error))
  }

  render () {
    const stories = this.state.stories;
    return (
      <div>
        <h3>
          { this.state.choice || ('Loading') } Stories
        </h3>
        {stories ? (
          <ol>
            {
              stories.map((story) => {
                return (
                  <Story story={story} key={story} />
                )
              })
            }
          </ol>
        ) : (
          <div>Loading...</div>
        )
        }
      </div>
    )
  }

}

export default StoryList
