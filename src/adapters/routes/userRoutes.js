const express = require('express');
const { registerUser, loginUser, getUserProfile } = require('../controllers/userController');
const { protect } = require('../../../src/app/middlewares/authMiddleware');
const router = express.Router();


router.post('/register', registerUser);


router.post('/login', loginUser);


router.get('/profile', protect, getUserProfile);

module.exports = router;
