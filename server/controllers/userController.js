const UserService = require('../services/userService.js');
const { validationResult } = require('express-validator');

class UserController {
  async registration(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        console.log(errors);
        next(errors);
      }
      const { email, password } = req.body;
      const userData = await UserService.registration(email, password);
      res.json(userData);
    } catch (e) {
      next(e);
    }
  }
  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const userData = await UserService.login(email, password);
      res.cookie('RefreshToken', userData.refreshToken, { httpOnly: true });
      res.json(userData);
    } catch (e) {
      next(e);
    }
  }
  async logout(req, res, next) {
    try {
      const { RefreshToken } = req.cookies;
      const userData = await UserService.logout(RefreshToken);
      res.clearCookie('RefreshToken');
      res.json(userData);
    } catch (e) {
      next(e);
    }
  }
  async refresh(req, res, next) {
    try {
      const { RefreshToken } = req.cookies;
      const userData = await UserService.refresh(RefreshToken);
      res.cookie('RefreshToken', userData.refreshToken, { httpOnly: true });
      res.json(userData);
    } catch (e) {
      next(e);
    }
  }
  async activate(req, res, next) {
    try {
      const { link } = req.params;
      console.log(link);
      const userData = await UserService.activate(link);
      res.json(userData);
    } catch (e) {
      next(e);
    }
  }
  async changeInfo(req, res, next) {
    try {
      const { name, age } = req.body;
      const file = req.files;
      const { RefreshToken } = req.cookies;
      const userData = await UserService.changeInfo(name, age, file, RefreshToken);
      res.json(userData);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new UserController();
