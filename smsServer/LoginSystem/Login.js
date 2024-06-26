const express = require('express');
const router = express.Router();
const db = require('../DataBase');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config(); // Ensure this line is at the top
const users = [
    { id: 1, login: 'admin', password: 'password', role: 'admin' },
    { id: 2, login: 'student', password: 'password', role: 'student' },
    { id: 3, login: 'teacher', password: 'password', role: 'teacher' },
  ];
  
router.post('/login', async (req, res) => {
    const { login, password } = req.body;

    // Determine login type
    let field;
    if (/^\d+$/.test(login)) {
        field = 'Phone_no'; // All digits -> phone number
    } else if (login.includes('@')) {
        field = 'Emali_id'; // Contains '@' -> email
    } else {
        field = 'User_name'; // Default to username
    }

    const query = `SELECT * FROM user_login WHERE ${field} = ?`;

    try {
        const [results] = await db.execute(query, [login]);

        if (results.length === 0) {
            return res.status(401).json({ message: 'Invalid login credentials' });
        }

        const user = results[0];
        console.log('Retrieved user:', user); // Debugging line

        const isMatch = await bcrypt.compare(password, user.Password);
        console.log('Password match:', isMatch); // Debugging line

        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        const token = jwt.sign(
            { id: user.Login_id, role: user.role },
            process.env.JWT_SECRET
        );
        res.json({ token });

    } catch (err) {
        console.error('Error during login:', err);
        res.status(500).json({ message: 'Server error' });
    }
});

// User role endpoint
router.get('/role', (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = users.find(u => u.id === decoded.id);
  
      if (user) {
        res.json({ role: user.role });
      } else {
        res.status(404).json({ message: "User not found" });
      }
    } catch (error) {
      res.status(401).json({ message: "Invalid token" });
    }
  });

module.exports = router;
