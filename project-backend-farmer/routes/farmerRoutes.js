// routes/farmerRoutes.js
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Farmer = require('../models/Farmer');

const router = express.Router();

// Register Farmer
router.post('/register', async (req, res) => {
    const { name, email, password, contactNumber, address } = req.body;
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newFarmer = new Farmer({ name, email, password: hashedPassword, contactNumber, address });
        await newFarmer.save();
        res.status(201).json({ message: "Registration successful!" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Farmer Login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const farmer = await Farmer.findOne({ email });
        if (!farmer) return res.status(400).json({ message: "Invalid credentials" });

        const isMatch = await bcrypt.compare(password, farmer.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

        const token = jwt.sign({ id: farmer._id }, 'mySecretKey', { expiresIn: '1h' });
        res.json({ message: "Login successful", token });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
