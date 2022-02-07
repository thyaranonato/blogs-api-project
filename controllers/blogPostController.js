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

module.exports = {
  create,
};
