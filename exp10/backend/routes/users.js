const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Register User
router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    try {
        const newUser = new User({ username, password }); // Saving password as plain text
        await newUser.save();
        res.json({ message: "User registered successfully!" });
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Login User
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username, password }); // Checking plain text password
        if (!user) {
            return res.json({ success: false, message: "Invalid credentials!" });
        }
        const token = jwt.sign({ id: user._id, username: user.username }, 'secret_key', { expiresIn: '1h' });
        res.json({ success: true, token, username: user.username });
    } catch (err) {
        res.status(500).send(err.message);
    }
});

module.exports = router;
