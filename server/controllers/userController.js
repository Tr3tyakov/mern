class UserController {
  async registration(req, res, next) {
    try {
      const { email, password } = req.body;
      const userData = await UserService.registration(email, password);

      res.json(userData);
    } catch (e) {
      next(e);
    }
  }
  async login(req, res, next) {
    try {
    } catch (e) {
      next(e);
    }
  }
  async logout(req, res, next) {
    try {
    } catch (e) {
      next(e);
    }
  }
  async activate(req, res, next) {
    try {
    } catch (e) {
      next(e);
    }
  }
  async getProducts(req, res, next) {
    try {
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new UserController();
