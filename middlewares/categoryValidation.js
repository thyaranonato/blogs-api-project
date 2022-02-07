const Joi = require('joi');

const categoryValidation = (req, res, next) => {
  const { error } = Joi.object({
    name: Joi.string().required(),
  }).validate(req.body);

  if (error) {
    return res.status(400).json({ message: error.details[0].message }); // [0] para não receber undefined
  }
  next();
};

module.exports = {
  categoryValidation,
};
