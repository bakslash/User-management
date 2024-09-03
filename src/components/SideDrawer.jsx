import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, Typography } from '@mui/material';
import { Home, PersonAdd, Info } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export default function SideDrawer() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const menuItems = [
    { name: 'Users', icon: <Home />, path: '/dashboard' },
    { name: 'Add User', icon: <PersonAdd />, path: '/add-user' },
    
  ];

  return (
    <Drawer
      variant='permanent'
      anchor='left'
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
          backgroundColor: '#9575cd',
          color: '#fff'
        }
      }}
    >
      <Typography variant="h6" sx={{ padding: '16px', textAlign: 'center' }}>Admin</Typography>
      <Divider />
      <List>
        {menuItems.map((item, index) => (
          <ListItem 
            button 
            key={index} 
            sx={{ padding: '10px 20px', '&:hover': { backgroundColor: '#7b5aa8' } }}
            onClick={() => handleNavigation(item.path)}
          >
            <ListItemIcon sx={{ color: '#fff' }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.name} primaryTypographyProps={{ fontSize: '16px', fontWeight: 'bold' }} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </Drawer>
  );
}
