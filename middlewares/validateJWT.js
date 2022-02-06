const jwt = require('jsonwebtoken');
require('dotenv').config();
const { Users } = require('../models');

const findUserByToken = (userJwt) => {
  const { id } = userJwt;
  return Users.findOne({ where: { id } });
};

const tokenValidation = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const validateJwt = jwt.verify(authorization, process.env.JWT_SECRET);
    const user = findUserByToken(validateJwt);

    if (!user) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }

    // req.user = user;
    next();
  } catch (e) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
}; 

module.exports = {
  tokenValidation,
};
