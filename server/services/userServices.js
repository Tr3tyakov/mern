const User = require('../models/userModel');
const uuid = require('uuid');
const transportMailer = require('../nodeMailer/userEmail');

class UserService {
  async registration(email, password) {
    const check = await User.findOne({ email });
    if (check) {
      throw Error('Данный пользователь уже зарегистрирован');
    }
    const ActivationLink = uuid.v4();
    await transportMailer(email, ActivationLink);
    const user = await User.create({ email, password, isActiveEmail: false, ActivationLink });
    return user;
  }
}

module.exports = new UserService();
