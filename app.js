const express = require('express');
const bodyParser = require('body-parser');
const todoRoutes = require('./routes/todoRoutes.js');
const userRoutes = require('./routes/userRoutes.js');
const authRoutes = require('./routes/authRoutes.js');
const errorHandler = require('./middlewares/errorHandler.js');
const authenticate = require('./middlewares/authMiddlewares.js');

const app = express();
app.use(bodyParser.json());

app.use('/auth', authRoutes);
app.use('/todos', authenticate, todoRoutes); 
app.use('/users', authenticate, userRoutes); 
app.use(errorHandler);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

module.exports = app;
