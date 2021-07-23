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
    const categoryData = await Category.findOne({ title: categoryId });

    const product = await Product.create({
      user: userId._id,
      category: categoryData._id,
      name,
      image,
      cost,
    });
    return product;
  }
}

module.exports = new productService();
