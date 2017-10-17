import React, { Component } from 'react';
import './App.css';
import StoryBoard from './components/story_board'
import Logo from './components/logo'
import {BrowserRouter as Router} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Logo />
          <StoryBoard />
        </div>
      </Router>
    );
  }
}



export default App;
