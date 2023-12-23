const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { UserLogin} = require('../../model/UserLogin');
const {UserSignup} = require('../../model/UserSignup');
const { encrypt, decrypt } = require('../../encryption');

const authenticateUser = async (req, res, next) => {
    const { email, password, action } = req.body;

    try {
        if (action === 'signup') {
            const existingUser = await UserSignup.findOne({ email });

            if (existingUser) {
                return res.status(400).json({ error: 'Email already exists' });
            }

            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = new UserSignup({ email, password: hashedPassword });
            await newUser.save();

            const encryptedEmail = encrypt(email);

            req.user = { email: encryptedEmail, userId: newUser._id, action: 'signup' };
        } else if (action === 'login') {
            const user = await UserLogin.findOne({ email });

            if (!user) {
                return res.status(401).json({ error: 'Invalid email or password' });
            }

            const passwordMatch = await bcrypt.compare(password, user.password);

            if (!passwordMatch) {
                return res.status(401).json({ error: 'Invalid email or password' });
            }

            const decryptedEmail = decrypt(user.email);

            req.user = { email: decryptedEmail, userId: user._id, action: 'login' };
        } else if (action === 'logout') {
            req.logout();
            return res.json({ message: 'Logged out successfully' });
        } else {
            return res.status(400).json({ error: 'Invalid action' });
        }
        next();
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Authentication failed' });
    }
};

module.exports = { authenticateUser };
