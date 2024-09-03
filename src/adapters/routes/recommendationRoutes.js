const express = require('express');
const { addRecommendation, getRecommendationsByUser } = require('../controllers/recommendationController');
const { protect } = require('../../app/middlewares/authMiddleware');
const router = express.Router();

router.post('/add', protect, addRecommendation);

router.get('/:userId', protect, getRecommendationsByUser);

module.exports = router;
