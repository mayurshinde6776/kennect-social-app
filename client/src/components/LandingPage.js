import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';  
import { Container, Form, Button } from 'react-bootstrap';
import { TextField } from '@mui/material';
import { setUserName } from '../redux/actions/userNameActions';

const LandingPage = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.userName.Name); 
  const navigate = useNavigate();  

  const handleNameChange = (e) => {
    dispatch(setUserName(e.target.value));
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
