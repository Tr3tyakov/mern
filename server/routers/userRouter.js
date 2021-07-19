const Router = require('express');
const router = new Router();
const UserController = require('../controllers/userController');
const authCheck = require('../middleware/authCheck');

router.post('/registration', UserController.registration);
router.post('/login', UserController.login);
router.get('/logout', UserController.logout);
router.get('/refresh', UserController.refresh);
router.get('/products', authCheck, UserController.getProducts);
router.get('/activate/:link', UserController.activate);

module.exports = router;
