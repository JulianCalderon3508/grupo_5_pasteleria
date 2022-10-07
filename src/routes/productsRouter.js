const express = require('express');
const productController = require('../controllers/productController')
const router = express.Router();

router.get('/',productController.producto);
router.get('/createProduct', productController.createProduct);
router.get('/editProduct', productController.editProduct)

module.exports = router;