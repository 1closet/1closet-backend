const RecommendationRepository = require('../../ports/RecommendationRepository');
const Recommendation = require('../../core/recommendations/Recommendation');

class SequelizeRecommendationRepository extends RecommendationRepository {
    constructor({ RecommendationModel }) {
        super();
        this.RecommendationModel = RecommendationModel;
    }

    async findByUserId(userId) {
        const recommendations = await this.RecommendationModel.findAll({ where: { userId } });
        return recommendations.map(rec => new Recommendation(rec.dataValues));
    }

    async save(recommendationData) {
        const recommendation = await this.RecommendationModel.create(recommendationData);
        return new Recommendation(recommendation.dataValues);
    }
}

module.exports = SequelizeRecommendationRepository;
