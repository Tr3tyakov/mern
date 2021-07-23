const Router = require('express');
const productController = require('../controllers/productController');
const router = new Router();

router.post('/product', productController.createProduct);
router.get('/product', productController.createProduct);
router.delete('/product', productController.createProduct);

module.exports = router;
