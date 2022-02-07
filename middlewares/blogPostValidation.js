const Joi = require('joi');

const blogPostValidation = (req, res, next) => {
  const { error } = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    categoryIds: Joi.array().required(),
  }).validate(req.body);

  if (error) {
    return res.status(400).json({ message: error.details[0].message }); // [0] para não receber undefined
  }
  next();
};

module.exports = {
  blogPostValidation,
};
