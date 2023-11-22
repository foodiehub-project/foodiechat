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

            res.status(201).json({ message: `Group ${createGroup.name} has been created` });
        }
        catch (error) {
            next(error);
        }
    }

    static async deleteGroup(req, res, next) {
        try {
            const { groupId } = req.params;

            const selectedGroup = await Group.findByPk(groupId);

            if (!selectedGroup) {
                throw { name: "NotFound" };
            }

            const deleteUserGroup = await UserGroup.destroy({
                where: {
                    GroupId: groupId
                },
            });

            const deleteGroup = await Group.destroy({
                where: {
                    id: groupId
                },
            });

            res.status(200).json({ message: `Group ${selectedGroup.name} successfully deleted` })
        }
        catch (error) {
            next(error);
        }
    }
}

module.exports = GroupController;