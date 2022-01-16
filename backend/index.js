const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { mongoConnect } = require('./config/connection');
require('dotenv').config();

// Routers
const userRouter = require('./routes/user.routes');
const recipeRouter = require('./routes/recipe.routes');
const loginRouter = require('./routes/login.routes');

// Server Instance
const port = process.env.PORT;
const app = express();
// conenxion.
mongoConnect();
// Middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

// routes
app.use('/users', userRouter);
app.use('/recipes', recipeRouter);
app.use('/login', loginRouter);
// Server Up.
// eslint-disable-next-line no-unused-vars
const server = app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Escuchando en  http://localhost:${port}`);
});

module.exports = app;
