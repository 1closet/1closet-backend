const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../database/models/User'); 
const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
   
        let user = await User.findOne({ where: { email } });
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }


        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

    
        user = await User.create({
            name,
            email,
            password: hashedPassword,
        });


        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(201).json({ message: 'User registered successfully', token });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};


const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
 
        let user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ message: 'User logged in successfully', token });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};


const getUserProfile = async (req, res) => {
    try {
      
        const user = await User.findByPk(req.user.id, { attributes: ['id', 'name', 'email'] });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ user });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

module.exports = {
    registerUser,
    loginUser,
    getUserProfile,
};
