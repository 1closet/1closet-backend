
const Product = require('../../adapters/database/models/Product'); 

const addProduct = async (req, res) => {
    const { name, price, color, description, station_match, image_url, store_url } = req.body;

    try {
        const product = await Product.create({ 
            name, 
            price, 
            color, 
            description, 
            station_match, 
            image_url, 
            store_url 
        });

        res.status(201).json({ message: 'Product added successfully', product });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

const getProductById = async (req, res) => {
    const productId = req.params.id;

    try {

        const product = await Product.findByPk(productId);

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json({ product });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

const getAllProducts = async (req, res) => {
    try {
   
        const products = await Product.findAll();

        res.status(200).json({ products });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

module.exports = {
    addProduct,
    getProductById,
    getAllProducts,
};
