const userService = require('../services/userService');

const createUser = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    
    const token = await userService.create({ displayName, email, password, image });
    if (token.message) return res.status(token.code).json(token.message);
      
    return res.status(201).json({ token });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};

const getAllUsers = async (_req, res) => {
  try {
  const allUsers = await userService.getAllUsers();
  return res.status(200).json(allUsers);
  } catch (e) {
  console.log(e.message);
  return res.status(500).json({ message: 'Algo deu errado' });
  }
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  
  try {
    const user = await userService.getUserById(id);
    if (user.message) return res.status(user.code).json(user.message);

    return res.status(200).json(user);
    } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Algo deu errado' });
    }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
};
