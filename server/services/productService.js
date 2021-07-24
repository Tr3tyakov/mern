const categoryService = require('../services/categoryService');
const Product = require('../models/products/Product');
const Token = require('../TokenService/userToken');

class productService {
  async createProduct(name, image, cost, RefreshToken, categoryId) {
    const check = await Product.findOne({ name });
    if (check) {
      throw Error('Данный продукт уже существует');
    }
    const userId = await Token.findToken(RefreshToken);
    const categoryData = await categoryService.findCurrentCategory(categoryId);
    console.log(categoryData, 'categoryData');
    const product = await Product.create({
      user: userId._id,
      category: categoryData._id,
      name,
      image,
      cost,
    });
    return product;
  }
  async getProducts(title) {
    const categoryId = await categoryService.findCurrentCategory(title);
    const products = await Product.find({ category: categoryId._id });
    console.log(categoryId._id);
    console.log(products);
    return products;
  }
  async deleteProduct(id) {
    const products = await Product.deleteOne({ id });
    return products;
  }
  async deleteAll(id) {
    const products = await Product.deleteMany({ id });
    return products;
  }
}

module.exports = new productService();
