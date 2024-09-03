// src/components/UserTable.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Table, TableHead, TableRow, TableCell, TableBody, IconButton, TablePagination, Box } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';

function UserTable({ users = [], onEdit, onDelete ,onView}) {
  const [page, setPage] = useState(0);
  const [rowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // Get the current users for the page
  const paginatedUsers = users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <>
      <Table
        sx={{
          bgcolor: 'background.paper',
          boxShadow: 1,
          borderRadius: 2,
          m: 3,
          width: '100%',
          maxWidth: 960,
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {paginatedUsers.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell> {/* Adjust based on actual user object shape */}
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell align="right">
              <IconButton onClick={() => onView(user.id)} aria-label="view" color='success'>
                  <VisibilityIcon />
                </IconButton>
                <IconButton onClick={() => onEdit(user.id)} aria-label="edit" color='info'>
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => onDelete(user.id)} aria-label="delete"color='warning'>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          m: 2
        }}
      >
        <TablePagination
          rowsPerPageOptions={[5]}
          component="div"
          count={users.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
        />
      </Box>
    </>
  );
}

UserTable.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired, // Adjust based on actual user object shape
      username: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    })
  ).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default UserTable;
