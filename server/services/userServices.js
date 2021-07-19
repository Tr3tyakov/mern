const User = require('../models/userModel');
const uuid = require('uuid');
const transportMailer = require('../nodeMailer/userEmail');
const bcrypt = require('bcrypt');
const Token = require('../TokenService/userToken');
const UserDto = require('../DTO/userDto');
const TokenModel = require('../models/TokenModel');

class UserService {
  async registration(email, password) {
    const check = await User.findOne({ email });
    if (check) {
      throw Error('Данный пользователь уже зарегистрирован');
    }
    const ActivationLink = uuid.v4();
    await transportMailer(email, ActivationLink);

    const hashPassword = await bcrypt.hash(password, 8);
    const user = await User.create({
      email,
      password: hashPassword,
      isActiveEmail: false,
      ActivationLink,
    });
    return user;
  }
  async login(email, password) {
    const user = await User.findOne({ email });
    if (!user) {
      throw Error('Неправильный логин или пароль1');
    }
    const checkPassword = await bcrypt.compare(password, user.password);
    if (!checkPassword) {
      throw Error('Неправильный логин или пароль2');
    }
    const userDto = new UserDto(user);
    const tokens = Token.generateToken(userDto);
    await TokenModel.create({ user: user._id, refreshToken: tokens.refreshToken });
    return { ...userDto, ...tokens };
  }
  async logout(refreshToken) {
    const check = await TokenModel.deleteOne({ refreshToken });
    return check;
  }
}

module.exports = new UserService();
