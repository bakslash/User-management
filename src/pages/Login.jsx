// src/pages/Login.jsx
import React, { useState } from 'react';
import { Box, TextField, Button, Stack, Typography, Card, Grid2, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Bg from '../assets/images/login1.png';

export default function Login() {
  const [userData, setUserData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      navigate('/dashboard');
      setUserData({ username: '', password: '' }); // Clear the input after submission
    } catch (err) {
      console.log(err);
      setError('An error occurred');
    }
  };

  return (
    <Grid2 container
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '100vh', background: 'linear-gradient(to bottom right, #9575cd, #e0b0ff)' }}
    >
      <Card sx={{ p: 3, width: 300, textAlign: 'center',background: 'transparent', }}>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            width: '100%',
            textAlign: 'center',
          
          }}
        >
          <Stack spacing={2}>
            <Paper sx={{ background: 'transparent', boxShadow: 'none' }}>
              <img src={Bg} alt="Login" style={{ maxWidth: '100%', opacity: 0.5 }} />
            </Paper>
            <Typography variant="h5"color='white'>Login</Typography>
            <TextField
              variant="outlined"
              size="small"
              label="Username"
              name="username"
              value={userData.username}
              onChange={handleInputChange}
              fullWidth
            />
            <TextField
              variant="outlined"
              size="small"
              label="Password"
              type="password"
              name="password"
              value={userData.password}
              onChange={handleInputChange}
              fullWidth
            />
            <Button variant="contained" size="small" type="submit" >
              Login
            </Button>
          </Stack>
        </Box>
      </Card>
    </Grid2>
  );
}
