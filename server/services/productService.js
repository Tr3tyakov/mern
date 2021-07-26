const categoryService = require('../services/categoryService');
const Product = require('../models/products/Product');
const Token = require('../TokenService/userToken');

class productService {
  async createProduct(name, image, cost, RefreshToken, categoryId) {
    if (!RefreshToken) {
      throw Error('Пользователь не авторизован');
    }
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
    return products;
  }
  async deleteProduct(id) {
    const products = await Product.deleteOne({ id });
    return products;
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
