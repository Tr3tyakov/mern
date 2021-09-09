const CategoryService = require('../services/categoryService');
const productService = require('../services/productService');

class Category {
  async createCategory(req, res, next) {
    try {
      const { title } = req.body;
      const file = req.files;
      const { RefreshToken } = req.cookies;
      const categoryData = await CategoryService.createCategory(RefreshToken, title, file);
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
      const id = req.params.id;

      const categoryData = await CategoryService.deleteCategory(id);
      const productData = await productService.deleteAll(id);

      res.json(categoryData);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new Category();
