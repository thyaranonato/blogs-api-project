require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const userController = require('./controllers/userController');
const loginController = require('./controllers/loginController');
const categoryController = require('./controllers/categoryController');
const blogPostController = require('./controllers/blogPostController');
const { userValidation } = require('./middlewares/userValidation');
const { loginValidation } = require('./middlewares/loginValidation');
const { tokenValidation } = require('./middlewares/validateJWT');
const { categoryValidation } = require('./middlewares/categoryValidation');
const { blogPostValidation } = require('./middlewares/blogPostValidation');

const app = express();

app.use(bodyParser.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post('/user', userValidation, userController.createUser);
app.get('/user', tokenValidation, userController.getAllUsers);
app.get('/user/:id', tokenValidation, userController.getUserById);

app.post('/login', loginValidation, loginController.login);

app.post('/categories', tokenValidation, categoryValidation, categoryController.createCategory);
app.get('/categories', tokenValidation, categoryController.getAll);

app.post('/post', tokenValidation, blogPostValidation, blogPostController.create);
app.get('/post', tokenValidation, blogPostController.getAll);
app.get('/post/:id', tokenValidation, blogPostController.getById);

app.listen(3000, () => console.log('ouvindo porta 3000!'));
