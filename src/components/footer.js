import React, { Component } from 'react';
import git_icon from '../github.svg'
import '../css/footer.css'

const githubProfile = 'https://www.github.com/aswinsanakan'
const githubRepo = 'https://www.github.com/aswinsanakan/hackernews-react'

const Footer = () => (
  <footer>
    <hr/>
    built by <a href={githubProfile} target='_blank'><span className='me'>Aswin Sanakan</span></a> with React.<br/>
    <a href={githubRepo} target='_blank'>
      <span className='source-code'>  
        Source Code in <img src={git_icon} className="github-logo" alt="logo" />
      </span>  
    </a>
  </footer>
)

export default Footer