const categoryService = require('../services/categoryService');
const Category = require('../models/products/Category');
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
    console.log(categoryId);
    const products = await Product.find(categoryId._id);
    return products;
  }
}

module.exports = new productService();
