const express = require('express');
const router = express.Router();
const db = require('../DataBase');
const bcrypt = require('bcrypt');

router.post('/register', async (req, res) => {
    const { username, email, phone, password, school_id, role } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const query = `INSERT INTO user_login (User_name, Emali_id, Phone_no, Password, School_id, role) VALUES (?, ?, ?, ?, ?, ?)`;

        const [result] = await db.execute(query, [username, email, phone, hashedPassword, school_id, role]);

        res.status(201).json({ message: 'User registered successfully', userId: result.insertId });
    } catch (err) {
        console.error('Error registering user:', err);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
