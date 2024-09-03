import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BasicLayout from '../layouts/BasicLayout';
import { fetchUserById } from '../services/userService'; // Example service function
import { Card, CardContent, Typography, CircularProgress, Container, Alert, Button } from '@mui/material';

export default function UserDetails() {
  const { id } = useParams();
  const navigate = useNavigate(); // Hook to navigate programmatically
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadUser = async () => {
      try {
        const userData = await fetchUserById(id);
        setUser(userData);
      } catch (error) {
        setError('Failed to load user details');
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, [id]);

  const handleGoBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <BasicLayout>
      <Container maxWidth="sm">
        {loading && <CircularProgress />}
        {error && <Alert severity="error">{error}</Alert>}
        {user && !loading && !error && (
          <>
            <Card sx={{ maxWidth: 600, mx: 'auto', mt: 4 }}>
              <CardContent>
                <Typography variant="h4" component="div" gutterBottom>
                  {user.name}
                </Typography>
                <Typography variant="h6" component="div" color="text.secondary">
                  Username: {user.username}
                </Typography>
                <Typography variant="h6" component="div" color="text.secondary">
                  Email: {user.email}
                </Typography>
              </CardContent>
            </Card>
            <Button
              variant="contained"
              color="primary"
              onClick={handleGoBack}
              sx={{ mt: 2 }}
            >
              Go Back
            </Button>
          </>
        )}
      </Container>
    </BasicLayout>
  );
}
