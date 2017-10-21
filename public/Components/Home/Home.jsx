import React, { Component } from 'react';
import Button from '../Button/Button.jsx';
import Video from '../Video/Video.jsx';
import axios from 'axios';
import './home.css';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: null
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/movies')
    .then((movies) => this.state.videos = movies)
    .then(() => console.log(this.state.videos))
    .catch(error => console.log(`axios fetch movies error: ${error}`)); 
  }

  render() {
    return (
      <div className="red">
        <h1>
          Hello
        </h1>
        <Video videos={this.state.videos}/>
      </div>
    );
  }
};