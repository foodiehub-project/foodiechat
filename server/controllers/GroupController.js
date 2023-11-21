'use strict';
const { Group, UserGroup } = require('../models');

class GroupController {
    static async addGroups(req, res, next) {
        try {
            const { name } = req.body;
            const UserId = req.user.id

            const createGroup = await Group.create({
                name: name,
            });

            const createAdmin = await UserGroup.create({
                GroupId: createGroup.id,
                UserId: UserId,
                role: "admin"
            });

            res.status(201).json({ message: `Group ${createGroup.name} has been created`});
        }
        catch(error) {
            next(error);
        }
    }
    static async editGroup(req, res, next) {
        try {
        
        }
        catch(error) {
            next(error);
        }
    }
}

module.exports = GroupController;