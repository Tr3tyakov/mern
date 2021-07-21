const Router = require('express');
const router = new Router();
const categoryController = require('../controllers/categoryController');

router.post('/category', categoryController.createCategory);
router.get('/category');

module.exports = router;
