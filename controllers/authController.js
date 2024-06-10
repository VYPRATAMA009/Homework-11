const authService = require('../services/authService.js');

const register = async (req, res, next) => {
    try {
        const { user, token } = await authService.register(req.body);
        res.json({ user, token });
    } catch (err) {
        next(err);
    }
};

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const { user, token } = await authService.login(email, password);
        res.json({ user, token });
    } catch (err) {
        next(err);
    }
};

module.exports = {
    register,
    login
};
