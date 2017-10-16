import React, {Component} from 'react'
import {create} from 'apisauce'

const storyApi = create({
  baseURL: 'https://hacker-news.firebaseio.com/v0'
})

class Story extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      url: '',
      score: ''      
    }
  }

  componentDidMount () {
    storyApi.get(`/item/${this.props.story}.json`)
    .then((response) => {
      this.setState({
        url: response.data.title,  
        title: response.data.url,
        score: response.data.score
      })
    })
  }

  render() {
    const state = this.state

    return(
      <li>
        {state.title}
        {state.url}
        {state.score}
        --------------
      </li>
    )
  }
}

export default Story