const Router = require('express');
const router = new Router();
const UserController = require('../controllers/userController');
const { check } = require('express-validator');

router.post(
  '/registration',
  check('email').isEmail(),
  check('password').isLength({ min: 8, max: 24 }),
  UserController.registration,
);
router.post('/login', UserController.login);
router.post('/changeInfo', UserController.changeInfo);
router.get('/logout', UserController.logout);
router.get('/refresh', UserController.refresh);
router.get('/activate/:link', UserController.activate);

module.exports = router;
