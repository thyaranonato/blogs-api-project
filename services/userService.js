const { User } = require('../models');

const create = async (displayName, email, password, image) => {
const newUser = await User.create(displayName, email, password, image);
return newUser;
};

const findByEmail = async (email) => {
  const response = await User.findOne({ where: { email } });
  return response;
};

module.exports = {
  create,
  findByEmail,
};
