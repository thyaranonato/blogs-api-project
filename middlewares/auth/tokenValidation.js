const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.JWT_SECRET;

const createToken = (payload) => {
  const jwtConfig = {
    expiresIn: '1h',
    algorithm: 'HS256',
  };
  const token = jwt.sign(payload, secret, jwtConfig);
  return { token };
};

const tokenValidation = (token) => {
  jwt.verify(token, secret);
};

module.exports = {
  createToken,
  tokenValidation,
};
