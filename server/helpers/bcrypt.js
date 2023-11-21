'use strict';

const bcrypt = require('bcrypt');

const hashPassword = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

const comparePassword = (password, hashPassword) => {
    return bcrypt.compareSync(password, hashPassword);
}

module.exports = {
    hashPassword,
    comparePassword
};