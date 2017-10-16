import React, { Component } from 'react';
import './App.css';
import NavBar from './components/nav_bar'
import StoryList from './components/story_list'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <StoryList />
      </div>
    );
  }
}

export default App;
