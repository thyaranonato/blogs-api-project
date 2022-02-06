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

module.exports = {
  createUser,
};
