const Joi = require('joi');

const userValidation = (req, res, next) => {
  const { error } = Joi.object({
    displayName: Joi.string().min(8).required(),
    email: Joi.string().email().required(),
    password: Joi.string().length(6).required(),
    image: Joi.string(),
  }).validate(req.body);

  if (error) {
    return res.status(400).json({ message: error.details[0].message }); // [0] para não receber undefined
  }
  next();
};

module.exports = {
  userValidation,
};