import React, { useState } from 'react';
import { Container, Card, Typography, TextField, Button } from '@mui/material';

const PostList = () => {
  const [posts, setPosts] = useState([
    { id: 1, userName: 'User1', postContent: 'This is the first post.', comments: [] },
    { id: 2, userName: 'User2', postContent: 'Another post here.', comments: [] },
   
  ]);

  const [commentContent, setCommentContent] = useState(''); 

  const handleCommentSubmit = (postId, userName, commentContent) => {
    const updatedPosts = posts.map((post) =>
      post.id === postId
        ? { ...post, comments: [...post.comments, { userName, commentContent }] }
        : post
    );
    setPosts(updatedPosts);
    setCommentContent(''); // Clear comment content after submission
  };

  return (
    <Container className="mt-5">
      {posts.map((post) => (
        <Card key={post.id} className="mb-4 p-3">
          <Typography variant="h5" mb={2}>
            {post.userName}
          </Typography>
          <Typography variant="body1" mb={2}>
            {post.postContent}
          </Typography>

          <Typography variant="h6" mb={2}>
            Comments:
          </Typography>
          {post.comments.map((comment, index) => (
            <div key={index} className="mb-2">
              <Typography variant="body2" color="textSecondary">
                {comment.userName}:
              </Typography>
              <Typography variant="body2">{comment.commentContent}</Typography>
            </div>
          ))}

          <TextField
            label="Your Comment"
            variant="outlined"
            fullWidth
            size="small"
            margin="normal"
            value={commentContent}
            onChange={(e) => setCommentContent(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleCommentSubmit(post.id, 'Commenter', commentContent)}
          >
            Comment
          </Button>
        </Card>
      ))}
    </Container>
  );
};

export default PostList;
