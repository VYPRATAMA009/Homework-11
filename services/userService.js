const { User } = require('../../models');

const getAllUsers = async () => {
    return await User.findAll();
};

const getUserById = async (id) => {
    return await User.findByPk(id, {
        include: ['todos'],
    });
};

const createUser = async (userData) => {
    return await User.create(userData);
};

const updateUser = async (id, updateData) => {
    return await User.update(updateData, {
        where: { id },
        returning: true,
        plain: true
    });
};

const deleteUser = async (id) => {
    return await User.destroy({
        where: { id }
    });
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};
