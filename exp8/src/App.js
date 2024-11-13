// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import './App.css';

const App = () => {
    const [users, setUsers] = useState([]);
    const [editingUser, setEditingUser] = useState(null);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const res = await axios.get('http://localhost:5001/api/users');
            setUsers(res.data);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    const addUser = async (user) => {
        try {
            await axios.post('http://localhost:5001/api/users', user);
            fetchUsers();
        } catch (error) {
            console.error("Error adding user:", error);
        }
    };

    const editUser = async (id, data) => {
        try {
            await axios.put(`http://localhost:5001/api/users/${id}`, data);
            fetchUsers(); // Refresh the list after editing
            setEditingUser(null); // Clear the editing state after editing
        } catch (error) {
            console.error("Error updating user:", error);
        }
    };

    const handleEdit = (user) => {
        setEditingUser(user); // Set the user to be edited
    };

    const deleteUser = async (id) => {
        try {
            await axios.delete(`http://localhost:5001/api/users/${id}`);
            fetchUsers();
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    };

    return (
        <div>
            <h1>User Registration</h1>
            <UserForm onSubmit={editingUser ? (user) => editUser(editingUser._id, user) : addUser} user={editingUser} />
            <UserList users={users} onEdit={handleEdit} onDelete={deleteUser} />
        </div>
    );
};

export default App;
