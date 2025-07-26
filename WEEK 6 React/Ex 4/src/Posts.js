import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      error: null
    };
  }

  loadPosts = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      this.setState({ posts: data });
    } catch (error) {
      this.setState({ error });
    }
  }

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, info) {
    alert("An error occurred: " + error.message);
  }

  render() {
    const { posts, error } = this.state;

    if (error) {
      return <p style={{ color: 'red' }}>Error loading posts.</p>;
    }

    return (
      <div>
        <h2>Blog Posts</h2>
        {posts.slice(0, 10).map(post => ( // limit to first 10 posts
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    );
  }
}

export default Posts;
