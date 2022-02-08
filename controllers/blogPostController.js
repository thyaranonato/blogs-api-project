const blogPostService = require('../services/blogPostService');

const create = async (req, res) => {
  try {
    const { title, content, categoryIds } = req.body;
    const { user } = req;
    const blogPost = await blogPostService.create({ user, title, content, categoryIds });

    if (blogPost.message) return res.status(blogPost.code).json(blogPost.message);
      
    return res.status(201).json(blogPost);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};

const getAll = async (_req, res) => {
  try {
    const blogPosts = await blogPostService.getAll();

    return res.status(200).json(blogPosts);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const blogPosts = await blogPostService.getById(id);

    if (blogPosts.message) return res.status(blogPosts.code).json(blogPosts.message);

    return res.status(200).json(blogPosts);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = {
  create,
  getAll,
  getById,
};
