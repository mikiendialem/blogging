const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { User } = require('../models');

const authenticateUser = async (req, res, next) => {
  const { email, password, action } = req.body;

  try {
        if (action === 'signup') {
            const existingUser = await User.findOne({ email });
            if (existingUser) {
                return res.status(400).json({ error: 'Email already exists' });
            }
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = new User({ FirstName, LastName, email, password: hashedPassword });
            await newUser.save();

            req.user = { email: newUser.email, userId: newUser._id, action: 'signup' };
        } 
        else if (action === 'login') {
            const user = await User.findOne({ email });

            if (!user) {
                return res.status(401).json({ error: 'Invalid email or password' });
            }

            const passwordMatch = await bcrypt.compare(password, user.password);

            if (!passwordMatch) {
                return res.status(401).json({ error: 'Invalid email or password' });
            }

            req.user = { email: user.email, userId: user._id, action: 'login' };
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
