import React from 'react';
import { Box, Typography } from '@mui/material';
import SearchBar from '../components/SearchBar';
import SideDrawer from '../components/SideDrawer';

export default function BasicLayout({ children }) {
  return (
    <Box sx={{ display: 'flex' }}>
      <SideDrawer />
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
            User Management
          </Typography>
          <SearchBar />
        </Box>
        <Box sx={{ mt: 2 }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}
