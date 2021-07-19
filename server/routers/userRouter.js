const Router = require('express');
const router = new Router();
const UserController = require('../controllers/userController');

router.post('/registration', UserController.registration);
router.post('/login', UserController.login);
router.get('/logout', UserController.logout);
router.get('/refresh', UserController.refresh);
router.get('/products');
router.get('/activate/:link', UserController.activate);

module.exports = router;
