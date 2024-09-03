// src/components/SearchBar.jsx
import React, { useState } from 'react';
import { Box, TextField, Button, Stack } from '@mui/material';

export default function SearchBar({ onSearch }) {
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(input);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSearch}
      sx={{ mx: 1, px: 1 }}
    >
      <Stack direction="row" spacing={2} alignItems="center">
        <TextField
          id="search-input"
          size="small"
          value={input}
          onChange={handleInputChange}
          placeholder="Search..."
          sx={{ width: '300px' }}
        />
        <Button type="submit" variant="contained">Search</Button>
      </Stack>
    </Box>
  );
}
