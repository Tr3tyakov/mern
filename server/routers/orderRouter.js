const Router = require('express');
const OrderController = require('../controllers/orderController');
const router = new Router();

router.post('/order', OrderController.createOrder);
router.get('/order', OrderController.getOrder);

module.exports = router;
