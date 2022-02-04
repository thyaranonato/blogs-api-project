const Joi = require('joi');

module.exports = (req, res, next) => {
  const { error } = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
  }).validate(req.body);

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};