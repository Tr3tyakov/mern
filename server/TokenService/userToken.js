const jwt = require('jsonwebtoken');

class Token {
  generateToken(model) {
    const accessToken = jwt.sign({ model }, process.env.SECRET_ACCESS_KEY, { expiresIn: '1h' });
    const refreshToken = jwt.sign({ model }, process.env.SECRET_ACCESS_KEY, { expiresIn: '24h' });
    return { accessToken, refreshToken };
  }
}

module.exports = new Token();
