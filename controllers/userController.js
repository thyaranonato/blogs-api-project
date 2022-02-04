const userService = require('../services/userService');
const { createToken } = require('../middlewares/auth/tokenValidation');

const createUser = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    
    const newUser = await userService.create({ displayName, email, password, image });
    delete newUser.password; // exclui password do payload na hora de gerar o token

    const token = createToken({ payload: newUser });
      
    return res.status(201).json({ token });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const response = await userService.findByEmail(email);

    if (!response || response.password !== password) {
      return res.status(400).json({ message: 'Invalid fields' });
    }
    delete response.password;
    const token = createToken({ payload: response });

    return res.status(200).json({ token });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = {
  createUser,
  login,
};
