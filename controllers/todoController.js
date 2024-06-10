const todoService = require('../services/todoService.js');

const getTodos = async (req, res, next) => {
    try {
        const todos = await todoService.getAllTodos();
        res.json(todos);
    } catch (err) {
        next(err);
    }
};

const getTodoById = async (req, res, next) => {
    try {
        const todo = await todoService.getTodoById(req.params.id);
        res.json(todo);
    } catch (err) {
        next(err);
    }
};

const createTodo = async (req, res, next) => {
    try {
        const todo = await todoService.createTodo({ ...req.body, userId: req.user.id });
        res.json(todo);
    } catch (err) {
        next(err);
    }
};

const deleteTodo = async (req, res, next) => {
    try {
        await todoService.deleteTodo(req.params.id);
        res.sendStatus(204);
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getTodos,
    getTodoById,
    createTodo,
    deleteTodo
};
