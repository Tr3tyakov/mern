const productService = require('../services/productService');

class productController {
  async createProduct(req, res, next) {
    try {
      const { name, cost, categoryId } = req.body;
      const { RefreshToken } = req.cookies;
      const file = req.files;
      const productData = await productService.createProduct(
        name,
        file,
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
  async getAllProducts(req, res, next) {
    try {
      const productData = await productService.getAll();
      res.json(productData);
    } catch (e) {
      next(e);
    }
  }
  async deleteProduct(req, res, next) {
    try {
      const id = req.params.id;
      const productData = await productService.deleteProduct(id);
      res.json(productData);
    } catch (e) {
      next(e);
    }
  }
  async patchProduct(req, res, next) {
    try {
      const id = req.params.id;
      const productData = await productService.patchProduct(id);
      res.json(produtcData);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new productController();
