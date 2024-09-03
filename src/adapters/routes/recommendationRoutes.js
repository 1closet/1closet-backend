const express = require('express');
const { addRecommendation, getRecommendationsByUser } = require('../controllers/recommendationController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

// Rota para adicionar uma nova recomendação
router.post('/add', protect, addRecommendation);

// Rota para obter todas as recomendações de um usuário
router.get('/:userId', protect, getRecommendationsByUser);

module.exports = router;
