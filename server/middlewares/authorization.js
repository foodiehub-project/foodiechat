'use strict';

const authorizationAdminOnly = async (req, res, next) => {
    try {
        if (req.user.rol === "admin") {
            next()
        } else {
            throw { name: "Forbidden" }
        }
    } catch (error) {
        next(error)
    }
}

module.exports = authorizationAdminOnly
