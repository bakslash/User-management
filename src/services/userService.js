// Fetch the API URL and auth token from environment variables
const API_URL = process.env.REACT_APP_API_URL;
const AUTH_TOKEN = process.env.REACT_APP_AUTH_TOKEN;

// Default fetch options
const fetchOptions = (method = 'GET', body = null) => ({
  method,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': AUTH_TOKEN,
  },
  body: body ? JSON.stringify(body) : null,
});

// Fetch all users
export const fetchUsers = async () => {
  try {
    const response = await fetch(API_URL, fetchOptions());
    if (!response.ok) {
      throw new Error(`Failed to fetch users: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch users', error);
    throw error;
  }
};

// Fetch a user by ID
export const fetchUserById = async (userId) => {
  try {
    const response = await fetch(`${API_URL}/${userId}`, fetchOptions());
    if (!response.ok) {
      throw new Error(`Failed to fetch user: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch user', error);
    throw error;
  }
};

// Delete a user by ID
export const deleteUser = async (userId) => {
  try {
    const response = await fetch(`${API_URL}/${userId}`, fetchOptions('DELETE'));
    if (!response.ok) {
      throw new Error(`Failed to delete user: ${response.statusText}`);
    }
  } catch (error) {
    console.error('Failed to delete user', error);
    throw error;
  }
};
