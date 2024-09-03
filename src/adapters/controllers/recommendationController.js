// src/adapters/controllers/recommendationController.js
const Recommendation = require('../../adapters/database/models/Recommendation');

const addRecommendation = async (req, res) => { // Nome alterado aqui
    const { userId, productId } = req.body;

    try {
        const recommendation = await Recommendation.create({ userId, productId });
        res.status(201).json({ message: 'Recommendation created successfully', recommendation });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

const getRecommendationsByUser = async (req, res) => {
    const userId = req.params.userId;

    try {
        const recommendations = await Recommendation.findAll({ where: { userId } });
        res.status(200).json({ recommendations });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

module.exports = {
    addRecommendation, 
    getRecommendationsByUser,
};
