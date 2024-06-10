const { Todo } = require('../../models');

const getAllTodos = async () => {
    return await Todo.findAll({ where: { deletedAt: null } });
};

const getTodoById = async (id) => {
    return await Todo.findOne({ where: { id, deletedAt: null } });
};

const createTodo = async (todoData) => {
    return await Todo.create(todoData);
};

const deleteTodo = async (id) => {
    return await Todo.destroy({ where: { id } }); // Soft delete
};

module.exports = {
    getAllTodos,
    getTodoById,
    createTodo,
    deleteTodo
};
