'use strict';

const { User } = require('../models')

const cloudinary = require('cloudinary').v2;

const { randomUUID } = require('crypto');

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
});


class UserController {
    static async editProfile() {
        try {
            const { userId } = req.params;
            const { fullName } = req.body;

            if (!req.file) throw { name: 'ValidationError' };
            const base64File = Buffer.from(req.file.buffer).toString('base64');
            const dataURI = `data:${req.file.mimetype};base64,${base64File}`;
            const data = await cloudinary.uploader.upload(dataURI, {
                public_id: `${req.file.originalname}_${randomUUID()}`,
                folder: 'news'
            });

            const user = User.findByPk(userId);

            if (!user) throw { name: "NotFound" };

            await User.update({ profilePicture: data.secure_url, fullName }, {
                where: {
                    id: userId
                }
            });

            res.status(200).json({ message: `Your profile has been updated` });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = UserController;