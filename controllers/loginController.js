const loginService = require('../services/loginService');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await loginService.login({ email, password });
    if (token.message) return res.status(token.code).json(token.message);

    return res.status(200).json({ token });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = {
  login,
}; 
