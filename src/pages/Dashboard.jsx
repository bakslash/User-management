import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserTable from '../components/UserTable';
import BasicLayout from '../layouts/BasicLayout';
import UserEditModal from '../components/UserEditModal';
import { fetchUsers, deleteUser } from '../services/userService';

export default function Dashboard() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const usersData = await fetchUsers();
        setUsers(usersData);
      } catch (error) {
        setError('Failed to load users');
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, []);

  const handleEdit = (userId) => {
    const user = users.find(user => user.id === userId);
    setSelectedUser(user);
    setEditModalOpen(true);
  };

  const handleSaveEdit = (updatedUser) => {
    // Implement save logic here
    console.log('Save edited user:', updatedUser);
    setEditModalOpen(false);
  };

  const handleDelete = async (userId) => {
    try {
      await deleteUser(userId);
      setUsers(users.filter(user => user.id !== userId));
    } catch (error) {
      setError('Failed to delete user');
    }
  };

  const handleView = (userId) => {
    navigate(`/user/${userId}`); // Navigate to the user details page
  };

  return (
    <BasicLayout>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {!loading && !error && users.length === 0 && <div>No users available</div>}
      {!loading && !error && users.length > 0 && (
        <UserTable users={users} onEdit={handleEdit} onDelete={handleDelete} onView={handleView} />
      )}
      {selectedUser && (
        <UserEditModal
          open={editModalOpen}
          onClose={() => setEditModalOpen(false)}
          user={selectedUser}
          onSave={handleSaveEdit}
        />
      )}
    </BasicLayout>
  );
}
