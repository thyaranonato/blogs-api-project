const jwt = require('jsonwebtoken');
const { Users } = require('../models');
require('dotenv').config();

const login = async ({ email, password }) => {
  const user = await Users.findOne({ where: { email } });

  if (!user || user.password !== password) {
    return { 
      code: 400,
      message: {
        message: 'Invalid fields',
      },
    };
  }

  const jwtConfig = {
    expiresIn: '1h',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ data: user }, process.env.JWT_SECRET, jwtConfig);
  return token;
};

module.exports = {
  login,
}; 
