const TokenService = require('../TokenService/userToken');

function authCheck(req, res, next) {
  const Authorization = req.headers.authorization;
  if (!Authorization) {
    throw Error('Пользователь не авторизован1');
  }
  const accessToken = Authorization.split(' ')[1];
  const userData = TokenService.verifyAccessToken(accessToken);
  if (!userData) {
    throw Error('Пользователь не авторизован');
  }

  next();
}

module.exports = authCheck;
