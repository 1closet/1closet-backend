class AddProduct {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }

    async execute(productData) {
        return this.productRepository.save(productData);
    }
}

module.exports = AddProduct;
