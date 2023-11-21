'use strict';
const {UserGroup, Group} = require('../models')

class UserGroupsController {
    static async getAllUserGroups(req, res, next) {
        try {
            const user = req.user
            const userId = user.id
            const userGroups = await UserGroup.findAll({
                where: {
                    UserId: userId
                },
                include: {
                    model: Group
                }
            });
            res.status(200).json(userGroups)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = UserGroupsController;