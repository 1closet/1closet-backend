const express = require('express');
const { addProduct, getProductById, getAllProducts } = require('../controllers/productController');
const router = express.Router();

// Rota para adicionar um novo produto
router.post('/add', addProduct);

// Rota para obter um produto pelo ID
router.get('/:id', getProductById);

// Rota para obter todos os produtos
router.get('/', getAllProducts);

module.exports = router;
