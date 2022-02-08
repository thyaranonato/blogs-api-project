const { BlogPosts, Categories, Users } = require('../models');

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

const getAll = async () => {
  // Ref: https://app.betrybe.com/course/back-end/nodejs-orm-autenticacao/orm-associations/043e2e8a-c28e-4b95-a949-b7c43221ca8d/conteudos/6a2dbadd-f6c8-400c-9b89-731064a534a6/relacionamentos-nn/2f990148-7b3d-4617-ad46-84331d8df1fd?use_case=side_bar
  const blogPosts = await BlogPosts.findAll({ include: [
    { model: Users, as: 'user', attributes: { exclude: ['password'] } },
    { model: Categories, as: 'categories', through: { attributes: [] } },
  ] });
  return blogPosts;
};

const getById = async (id) => {
  const post = await BlogPosts.findAll({ where: { id } });

  if (!post.length) {
    return { 
      code: 404,
      message: {
        message: 'Post does not exist',
      },
    };
  }

  const blogPosts = await BlogPosts.findByPk(id, { include: [
    { model: Users, as: 'user', attributes: { exclude: ['password'] } },
    { model: Categories, as: 'categories', through: { attributes: [] } },
  ] });
  return blogPosts;
};

module.exports = {
  create,
  getAll,
  getById,
};
