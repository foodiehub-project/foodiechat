'use strict';
const { User, Group, UserGroup } = require('../models');

const cloudinary = require('cloudinary').v2;

const { randomUUID } = require('crypto');

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
});

class GroupController {
    static async addGroups(req, res, next) {
        try {
            const { name } = req.body;
            const UserId = req.user.id

            if (!req.file) throw { name: 'ValidationError' };
            const base64File = Buffer.from(req.file.buffer).toString('base64');
            const dataURI = `data:${req.file.mimetype};base64,${base64File}`;
            const data = await cloudinary.uploader.upload(dataURI, {
                public_id: `${req.file.originalname}_${randomUUID()}`,
                folder: 'foodie'
            });

            const createGroup = await Group.create({
                groupPicture: data.secure_url,
                name
            });

            const createAdmin = await UserGroup.create({
                GroupId: createGroup.id,
                UserId: UserId,
                role: "admin"
            });

            res.status(201).json({ message: `Group ${createGroup.name} has been created` });
        }
        catch (error) {
            console.log(error, "error add");
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
    static async getGroupById(req, res, next) {
        try {
            const { groupId } = req.params;

            const selectedGroup = await Group.findOne({
                where: {
                    "$id$": groupId
                },
                include: {
                    model: UserGroup,
                    attributes: [
                        "id", "UserId", "role"
                    ],
                    include: {
                        model: User,
                        attributes: [
                            "id", "fullName", "profilePicture"
                        ]
                    }
                }
            });

            if (!selectedGroup) {
                throw { name: "NotFound" };
            }

            res.status(200).json(selectedGroup);
        }
        catch (error) {
            next(error);
        }
    }
}

module.exports = GroupController;