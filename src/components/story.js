import React, {Component} from 'react'
import {create} from 'apisauce'
import '../css/story.css'

const storyApi = create({
  baseURL: 'https://hacker-news.firebaseio.com/v0'
})

class Story extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      url: '',
      score: '',
      author: ''      
    }
  }

  componentDidMount () {
    storyApi.get(`/item/${this.props.story}.json`)
    .then((response) => {
      this.setState({
        url: response.data.url || '',  
        title: response.data.title || '',
        score: response.data.score || '',
        author: response.data.by || ''
      })
    })
  }

  render() {
    const state = this.state

    return(
      <li>
        { state.title ? (
          <div>
            <a href={state.url} target='_blank'>
              <h4>{state.title}</h4>
            </a>
            <p>by <span className='author'>{state.author}</span> | <span className='score'>{state.score}</span> upvotes</p>
          </div>
          ) : (
            <div className="loader"></div>
          )
        }
      </li>
    )
  }
}

export default Story