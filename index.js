require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const userController = require('./controllers/userController');
const { userValidation, emailExistsValidation } = require('./middlewares/userValidation');
const loginValidation = require('./middlewares/loginValidation');

const app = express();

app.use(bodyParser.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post('/user', userValidation, emailExistsValidation, userController.createUser);
app.post('/login', loginValidation, userController.login);

app.listen(3000, () => console.log('ouvindo porta 3000!'));
