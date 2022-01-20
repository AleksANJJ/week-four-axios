import React from 'react';
import { Component } from 'react';
import axios from "axios";
import './App.css';

class App extends Component {

state = {
  posts: []
}

componentDidMount() {
  axios.get("https://jsonplaceholder.typicode.com/posts")
  .then(res => {
    const posts = res.data;
    console.log("posts");
    this.setState({posts});
  })
}

  render() {
    return(
      <div>
        {this.state.posts.map(post => <p key={post.id}> {post.title} {post.body}</p>)}
      </div>)
  }
}

export default App;
