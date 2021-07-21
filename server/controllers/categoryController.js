const CategoryService = require('../services/categoryService');

class Category {
  async createCategory(req, res, next) {
    try {
      const { title } = req.body;
      const { RefreshToken } = req.cookies;

      const categoryData = await CategoryService.createCategory(RefreshToken, title);
      res.json(categoryData);
    } catch (e) {
      next(e);
    }
  }
  async getCategory(req, res, next) {
    try {
      const categoryData = await CategoryService.getCategory();
      res.json(categoryData);
    } catch (e) {
      next(e);
    }
  }
  async deleteCategory(req, res, next) {
    try {
      const { id } = req.params;
      const categoryData = await CategoryService.deleteCategory();
      res.json(categoryData);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new Category();
