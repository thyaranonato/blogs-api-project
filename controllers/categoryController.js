const categoryService = require('../services/categoryService');

const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const category = await categoryService.create({ name });

    return res.status(201).json(category);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};

const getAll = async (_req, res) => {
  try {
    const categories = await categoryService.getAll();

    return res.status(200).json(categories);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = {
  createCategory,
  getAll,
};
