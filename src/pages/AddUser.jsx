import React, { useState } from 'react';
import BasicLayout from '../layouts/BasicLayout';
import { TextField, Button, Typography, Card, CardContent, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function AddUser() {
  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for submitting user details (e.g., API call)
    console.log('User added:', user);
    navigate('/dashboard'); // Navigate back to dashboard after adding user
  };

  return (
    <BasicLayout>
      <Container maxWidth="sm">
        <Card sx={{ mt: 4 }}>
          <CardContent>
            <Typography variant="h4" component="div" gutterBottom>
              Add New User
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Name"
                name="name"
                value={user.name}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
              />
              <TextField
                label="Username"
                name="username"
                value={user.username}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
              />
              <TextField
                label="Email"
                name="email"
                type="email"
                value={user.email}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ mt: 2 }}
              >
                Add User
              </Button>
            </form>
          </CardContent>
        </Card>
      </Container>
    </BasicLayout>
  );
}
