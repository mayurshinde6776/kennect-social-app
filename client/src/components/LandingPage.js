import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';  
import { Container, Form, Button } from 'react-bootstrap';
import { TextField } from '@mui/material';

const LandingPage = () => {
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();  

  const handleNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleButtonClick = () => {
    if (userName.trim() !== '') {
      navigate(`/posts?name=${userName}`);
    }
  };

  return (
    <Container className="mt-5">
      <h1>Welcome to My Website</h1>
      <Form>
        <Form.Group className="mb-3">
          <TextField
            label="Enter Your Name"
            variant="outlined"
            fullWidth
            value={userName}
            onChange={handleNameChange}
          />
        </Form.Group>
        <Button variant="primary" onClick={handleButtonClick}>
          Create a Post
        </Button>
      </Form>
    </Container>
  );
};

export default LandingPage;
