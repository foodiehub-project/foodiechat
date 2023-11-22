'use strict';
const { UserGroup } = require("../models");
const group = require("../models/group");

const authorizationAdminOnly = async (req, res, next) => {
    try {
        const { groupId } = req.params;

        const userGroup = await UserGroup.findOne({
            where: {
                UserId: req.user.id,
                GroupId: groupId,
            }
        });

        if (userGroup.role === "admin") {
            next()
        } else {
            throw { name: "Forbidden" }
        }
    } catch (error) {
        next(error);
    }
}

module.exports = authorizationAdminOnly
