const express = require('express');
const { registerUser, loginUser, getUserProfile } = require('../controllers/userController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

// Rota para registro de usuário
router.post('/register', registerUser);

// Rota para login de usuário
router.post('/login', loginUser);

// Rota para obter o perfil do usuário
router.get('/profile', protect, getUserProfile);

module.exports = router;
