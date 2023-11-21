'use strict';
const { UserGroup, Group } = require('../models')

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
            const { userGroupId } = req.params

            const userGroup = await UserGroup.findByPk(userGroupId, {
                include: {
                    model: Group
                }
            })
        
            if (!userGroup) throw { name: "NotFound" }

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

    static async addMember() {
        try {
            
        } catch (error) {
            next(error)
        }
    }
}

module.exports = UserGroupsController;