const express = require('express');
const router = express.Router();
const { authenticateUser } = require('../middleware/auth/auth');

const addUserToDatabase = async (userData) => {
    try {
        const newUser = await User.create(userData);
        return newUser;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to add user to the database');
    }
};

router.post('/signup', authenticateUser, async (req, res) => {
    try {
        const user = await addUserToDatabase({
            email: 'example@example.com',
            password: 'password123'
        });
        res.json({ user, message: 'Signup successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to add user to the database' });
    }
});

router.get("/profile", authenticateUser, async (req, res) => {
    if (!req.user) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    try {
        const userProfile = await User.findById(req.user.userId);
        res.json({ user: userProfile, message: 'Profile retrieved successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to retrieve the user profile' });
    }
});
router.post('/login', authenticateUser, (req, res) => {
    res.json({ user: req.user, message: 'Login successfully' });
});

module.exports = router;
