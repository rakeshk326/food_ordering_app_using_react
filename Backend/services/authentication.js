const JWT = require('jsonwebtoken');
require('dotenv').config();
const SECRET_KEY = 'YummyF00d';

function createToken(user) {

    const payload = {
        _id: user._id,
        email: user.email,
    }

    const token = JWT.sign(payload,process.env.SECRET_KEY || SECRET_KEY);
    return token;
}

function validateToken(token) {
    const payload = JWT.verify(token,process.env.SECRET_KEY || SECRET_KEY);
    return payload;
}

module.exports = {
    createToken,
    validateToken
}