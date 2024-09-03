const ProductRepository = require('../../ports/ProductRepository');
const Product = require('../../core/products/Product');

class SequelizeProductRepository extends ProductRepository {
    constructor({ ProductModel }) {
        super();
        this.ProductModel = ProductModel;
    }

    async findById(id) {
        const product = await this.ProductModel.findByPk(id);
        if (!product) return null;
        return new Product(product.dataValues);
    }

    async save(productData) {
        const product = await this.ProductModel.create(productData);
        return new Product(product.dataValues);
    }
}

module.exports = SequelizeProductRepository;
