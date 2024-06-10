const jwt = require('jsonwebtoken');
const { User } = require('../../models');

const secret = 'secret'; // Use a more secure secret in production

const authenticate = async (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');
    if (!token) {
        return res.status(401).send({ error: 'Access denied' });
    }
    try {
        const decoded = jwt.verify(token, secret);
        const user = await User.findByPk(decoded.id);
        if (!user) {
            throw new Error();
        }
        req.user = user;
        next();
    } catch (err) {
        res.status(401).send({ error: 'Access denied' });
    }
};

module.exports = authenticate;
