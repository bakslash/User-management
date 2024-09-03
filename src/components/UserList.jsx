import React, { useState, useEffect } from 'react';
import { TextField, Box, Button, Stack, List, ListItem } from '@mui/material';

export default function UserList() {
    const [users, setUsers] = useState('');
    const [list, setList] = useState([]);

    useEffect(() => {
        console.log('Updated users:', list);
    }, [list]);

    const handleChange = (e) => {
        setUsers(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        // Add the current user to the list and clear the input
        setList((prevUsers) => [...prevUsers, users]);
        setUsers(''); // Clear the input after submission
    };

    return (
        <>
            <Box
                component='form'
                sx={{
                    bgcolor: 'background.paper',
                    boxShadow: 1,
                    borderRadius: 2,
                    m: 4,
                    p: 2,
                    width: 300,
                }}
                onSubmit={handleSubmit} // Attach the handleSubmit to the form's submit event
            >
                <Stack direction="row" spacing={2} alignItems="center">
                    <TextField
                        id="outlined"
                        size='small'
                        value={users}
                        onChange={handleChange}
                        fullWidth // Make the input field take the full width of the container
                    />
                      <Button type="submit" variant="outlined">Add</Button>
                </Stack>

                <Stack spacing={2} direction="row" sx={{ marginTop: 2 }}>
                
                </Stack>
            
                <List>
                    {list.map((user, index) => (
                        <ListItem key={index}>
                            <Stack direction="row" spacing={2} alignItems="center" sx={{ width: '100%' }}>
                                <Box sx={{ flexGrow: 1 }}>{user}</Box>
                                <Button variant='contained' size='small'>Edit</Button>
                            </Stack>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </>
    );
}
