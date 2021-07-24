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
  async getCategory() {
    const categoryData = await Category.find();
    return categoryData;
  }
  async findCurrentCategory(title) {
    const categoryData = await Category.find({ title });
    return categoryData;
  }
  async deleteCategory(id) {
    const categoryData = await Category.deleteOne(id);
    return categoryData;
  }
}

module.exports = new CategoryService();
