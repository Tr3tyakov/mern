const Router = require('express');
const router = new Router();
const UserController = require('../controllers/userController');

router.post('/registration', UserController.registration);
router.post('/login', UserController.login);
router.get('/logout');
router.get('/activate/:link');
router.get('/products');

module.exports = router;
