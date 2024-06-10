const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController.js');

router.get('/', todoController.getTodos);
router.get('/:id', todoController.getTodoById);
router.post('/', todoController.createTodo);
router.delete('/:id', todoController.deleteTodo);

module.exports = router;
