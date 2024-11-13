const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Create User
router.post('/', async (req, res) => {
    try {
        const newUser = new User(req.body);
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(400).json({
            status: 'error',
            message: err.message,
            details: err.errors
        });
    }
});

// Get All Users
router.get('/', async (req, res) => {
    try {
        const users = await User.find().select('-__v');
        res.status(200).json({
            status: 'success',
            count: users.length,
            data: users
        });
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: 'Error fetching users'
        });
    }
});

// Update User
router.put('/:id', async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true, runValidators: true }
        );

        if (!updatedUser) {
            return res.status(404).json({
                status: 'error',
                message: 'User not found'
            });
        }

        res.status(200).json({
            status: 'success',
            data: updatedUser
        });
    } catch (err) {
        res.status(400).json({
            status: 'error',
            message: err.message
        });
    }
});

// Delete User
router.delete('/:id', async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);

        if (!deletedUser) {
            return res.status(404).json({
                status: 'error',
                message: 'User not found'
            });
        }

        res.status(200).json({
            status: 'success',
            message: 'User deleted successfully'
        });
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: 'Error deleting user'
        });
    }
});

module.exports = router;
