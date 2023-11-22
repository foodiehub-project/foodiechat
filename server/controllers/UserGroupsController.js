'use strict';
const { UserGroup, Group, User } = require('../models')

class UserGroupsController {

    static async getMyGroups(req, res, next) {
        try {
            const user = req.user;
            const userId = user.id;

            const userGroups = await UserGroup.findAll({
                attributes: [
                    'id', 'role', 'GroupId', 'UserId'
                ],
                where: {
                    UserId: userId
                },
                include: {
                    model: Group,
                    attributes: [
                        'id', 'name', 'groupPicture'
                    ]
                }
            });

            res.status(200).json(userGroups);
        } catch (error) {
            next(error);
        }
    }

    static async leaveGroup(req, res, next) {
        try {
            const { groupId } = req.params
            const user = req.user
            const UserId = user.id

            await UserGroup.destroy({
                where: {
                    id: userGroupId
                }
            })

            res.status(200).json({ message: `You have leave ${userGroup.Group.name} group` })
        } catch (error) {
            next(error);
        }
    }

    static async addMember(req, res, next) {
        try {
            const { groupId } = req.params
            const { UserId } = req.body

            const memberToAdd = await UserGroup.findOne({
                where: {
                    GroupId: groupId,
                    UserId
                },
                include: {
                    model: User
                }
            })

            if (memberToAdd) throw { name: "DuplicatedData", memberName: memberToAdd.User.fullName }

            await UserGroup.create({
                UserId,
                GroupId: groupId
            })

            res.status(201).json({ message: `You have added new member to the group` })
        } catch (error) {
            next(error);
        }
    }
}

module.exports = UserGroupsController;