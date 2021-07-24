const Router = require('express');
const productController = require('../controllers/productController');
const router = new Router();

router.post('/product', productController.createProduct);
router.get('/product/:title', productController.getProducts);
router.delete('/product/:id', productController.deleteProduct);

module.exports = router;
