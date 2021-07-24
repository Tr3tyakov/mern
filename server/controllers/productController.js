const productService = require('../services/productService');

class productController {
  async createProduct(req, res, next) {
    try {
      const { name, img, cost, categoryId } = req.body;
      const { RefreshToken } = req.cookies;
      const productData = await productService.createProduct(
        name,
        img,
        cost,
        RefreshToken,
        categoryId,
      );
      res.json(productData);
    } catch (e) {
      next(e);
    }
  }
  async getProducts(req, res, next) {
    try {
      const title = req.params.title;
      const productData = await productService.getProducts(title);
      res.json(productData);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new productController();
