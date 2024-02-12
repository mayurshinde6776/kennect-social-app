import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const Posts = () => {
  const location = useLocation();
  const userName = new URLSearchParams(location.search).get('name');
  const [postContent, setPostContent] = useState('');
  const [posts, setPosts] = useState([]);

  const handlePostChange = (e) => {
    setPostContent(e.target.value);
  };

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (postContent.trim() !== '') {
      const newPost = {
        userName: userName,
        content: postContent,
      };
      setPosts((prevPosts) => [...prevPosts, newPost]);
      setPostContent('');
    }
  };

  return (
    <Container className="mt-5">
      <h1>Hello, {userName}!</h1>
      <Form onSubmit={handlePostSubmit}>
        <Form.Group controlId="postContent">
          <Form.Label>Create a Post</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={postContent}
            onChange={handlePostChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Post
        </Button>
      </Form>
      <div className="mt-3">
        {posts.map((post, index) => (
          <div key={index}>
            <h5>{post.userName}</h5>
            <p>{post.content}</p>
            <hr />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Posts;
