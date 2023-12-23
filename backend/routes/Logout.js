// logoutRoute.js
const express = require('express');
const router = express.Router();
const { authenticateUser } = require('../middleware/auth/auth');

router.post('/logout', authenticateUser, (req, res) => {
    try {
        req.logout(); // Assuming you are using Passport.js
        res.json({ message: 'Logged out successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to logout' });
    }
});

module.exports = router;
