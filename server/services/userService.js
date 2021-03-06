const User = require('../models/users/userModel');
const uuid = require('uuid');
const transportMailer = require('../nodeMailer/userEmail');
const bcrypt = require('bcrypt');
const TokenService = require('../TokenService/userToken');
const UserDto = require('../DTO/userDto');
const fileService = require('./fileService');

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
      throw Error('Неправильный логин или пароль');
    }
    const checkPassword = await bcrypt.compare(password, user.password);
    if (!checkPassword) {
      throw Error('Неправильный логин или пароль');
    }
    const userDto = new UserDto(user);
    const tokens = TokenService.generateToken(userDto);
    await TokenService.refresh(userDto.id, tokens.refreshToken);

    return { ...userDto, ...tokens };
  }

  async logout(refreshToken) {
    const check = await TokenService.deleteToken(refreshToken);
    return check;
  }

  async refresh(refreshToken) {
    if (!refreshToken) {
      throw Error('Неправильный токен');
    }
    const checkToken = await TokenService.findToken(refreshToken);
    const verify = await TokenService.verifyRefreshToken(refreshToken);

    if (!checkToken || !verify) {
      throw Error('Ошибка при рефреше токена');
    }

    const user = await User.findById(checkToken.user);
    const userDto = new UserDto(user);
    const tokens = TokenService.generateToken(userDto);
    await TokenService.refresh(userDto.id, tokens.refreshToken);

    return { ...userDto, ...tokens };
  }
  async activate(link) {
    const check = await User.findOneAndUpdate({ ActivationLink: link }, { isActiveEmail: true });
    return check;
  }
  async forgotPassword() {
    const user = await User.findOneAndUpdate({ ActivationLink: link }, { isActiveEmail: true });
  }
  async changeInfo(name, age, file, refreshToken) {
    const tokenData = await TokenService.findToken(refreshToken);
    const user = await User.findById(tokenData.user);
    if (!user) {
      throw Error('Пользователь не найден');
    }
    const fileName = fileService.saveFile(file);
    name ? (user.name = name) : '';
    age ? (user.age = age) : '';
    file ? (user.avatar = fileName) : '';
    await user.save();
    const userDto = new UserDto(user);
    return userDto;
  }
}

module.exports = new UserService();
