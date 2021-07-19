const jwt = require('jsonwebtoken');
const TokenModel = require('../models/TokenModel');

class Token {
  generateToken(model) {
    const accessToken = jwt.sign({ model }, process.env.SECRET_ACCESS_KEY, { expiresIn: '1h' });
    const refreshToken = jwt.sign({ model }, process.env.SECRET_REFRESH_KEY, { expiresIn: '24h' });
    return { accessToken, refreshToken };
  }
  async findToken(refreshToken) {
    const check = await TokenModel.findOne({ refreshToken });
    return check;
  }
  async deleteToken(refreshToken) {
    const data = await TokenModel.deleteOne({ refreshToken });
    return data;
  }

  async refresh(id, refreshToken) {
    const check = await TokenModel.findOne({ user: id });
    if (check) {
      check.refreshToken = refreshToken;
      return check.save();
    }
    TokenModel.create({ user: id, refreshToken });
  }
  verifyRefreshToken(refreshToken) {
    const check = jwt.verify(refreshToken, process.env.SECRET_REFRESH_KEY);
    return check;
  }
  verifyAccessToken(accessToken) {
    const check = jwt.verify(accessToken, process.env.SECRET_ACCESS_KEY);
    return check;
  }
}

module.exports = new Token();
