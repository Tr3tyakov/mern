const Category = require('../models/products/Category');
const Token = require('../models/users/TokenModel');
const User = require('../models/users/userModel');
const TokenService = require('../TokenService/userToken');

class CategoryService {
  async createCategory(refreshToken, title) {
    const checkCategory = await Category.findOne({ title });
    if (checkCategory) {
      throw Error('Данная категория уже существует');
    }
    const { user } = await TokenService.findToken(refreshToken);
    const category = await Category.create({ user, title });
    return category;
  }
}

module.exports = new CategoryService();
