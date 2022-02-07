const { BlogPosts, Categories } = require('../models');

const create = async ({ user, title, content, categoryIds }) => {
  const blogPost = await BlogPosts.create({ title, content, userId: user.id });

  const categories = await Categories.findAll({ where: { id: categoryIds } });

  if (!categories.length) {
    return { 
      code: 400,
      message: {
        message: '"categoryIds" not found',
      },
    };
  }
  return blogPost;
};

module.exports = {
  create,
};
