const categoryService = require('../services/categoryService');
const Product = require('../models/products/Product');
const Token = require('../TokenService/userToken');
const fileService = require('./fileService');

class productService {
  async createProduct(name, file, cost, RefreshToken, categoryId) {
    if (!RefreshToken) {
      throw Error('Пользователь не авторизован');
    }
    const check = await Product.findOne({ name });
    if (check) {
      throw Error('Данный продукт уже существует');
    }
    const fileName = fileService.saveFile(file);
    const userId = await Token.findToken(RefreshToken);
    const categoryData = await categoryService.findCurrentCategory(categoryId);
    const product = await Product.create({
      user: userId._id,
      category: categoryData._id,
      name,
      image: fileName,
      cost,
    });
    return product;
  }
  async getProducts(title) {
    const categoryId = await categoryService.findCurrentCategory(title);
    const products = await Product.find({ category: categoryId._id });
    return products;
  }
  async deleteProduct(id) {
    const products = await Product.deleteOne({ _id: id });
    return products;
  }
  async patchProduct(id) {
    const product = await Product.findOneAndUpdate({ id }, {});
  }
  async deleteAll(id) {
    const products = await Product.deleteMany({ category: id });
    return products;
  }
  async getAll() {
    const products = await Product.find();
    return products;
  }
}

module.exports = new productService();
