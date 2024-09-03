class CreateRecommendation {
    constructor(recommendationRepository) {
        this.recommendationRepository = recommendationRepository;
    }

    async execute(recommendationData) {
        return this.recommendationRepository.save(recommendationData);
    }
}

module.exports = CreateRecommendation;
