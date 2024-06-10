const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { User } = require('../../models');

const secret = 'secret'; 

const generateToken = (user) => {
    return jwt.sign({ id: user.id, email: user.email }, secret, { expiresIn: '1h' });
};

const register = async (userData) => {
    const user = await User.create(userData);
    const token = generateToken(user);
    return { user, token };
};

const login = async (email, password) => {
    const user = await User.findOne({ where: { email } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
        throw new Error('Invalid email or password');
    }
    const token = generateToken(user);
    return { user, token };
};

module.exports = {
    register,login
};
