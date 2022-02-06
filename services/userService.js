const jwt = require('jsonwebtoken');
const { Users } = require('../models');
require('dotenv').config();

const secret = process.env.JWT_SECRET;

const create = async ({ displayName, email, password, image }) => {
  const registeredUser = await Users.findOne({ where: { email } });

  if (registeredUser) {
    return { 
      code: 409,
      message: {
        message: 'User already registered',
      },
    };
  }

const newUser = await Users.create({ displayName, email, password, image });

const jwtConfig = {
  expiresIn: '1h',
  algorithm: 'HS256',
};

const token = jwt.sign({ data: newUser.email }, secret, jwtConfig);
return token;
};

const getAllUsers = async () => {
  const allUsers = await Users.findAll({ attributes: { exclude: ['password'] } });
  return allUsers;
};

module.exports = {
  create,
  getAllUsers,
};
