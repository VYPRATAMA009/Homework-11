'use strict';
module.exports = (sequelize, DataTypes) => {
    const Todo = sequelize.define('Todo', {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        deletedAt: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Users',
                key: 'id',
            }
        }
    }, {
        paranoid: true, // Enable soft delete
        timestamps: true,
        deletedAt: 'deletedAt'
    });

    Todo.associate = function(models) {
        Todo.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
    };
    
    return Todo;
};
