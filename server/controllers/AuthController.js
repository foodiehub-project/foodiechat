'use strict';
const { comparePassword } = require('../helpers/bcrypt');
const { createToken } = require('../helpers/jwt');
const { User } = require('../models');
const { OAuth2Client } = require('google-auth-library');

class AuthController {

    static async login(req, res, next) {
        try {
            // console.log(req.body);
            const { email, password } = req.body;

            // validate input
            if (!email) throw { name: "InvalidInput", field: "Email" };
            if (!password) throw { name: "InvalidInput", field: "Password" };

            // check if user exist
            const user = await User.findOne({ where: { email } });
            if (!user) throw { name: "Unauthenticated" };
            // check password
            const compared = comparePassword(password, user.password);
            if (!compared) throw { name: "Unauthenticated" };

            // create JWT
            const access_token = createToken({ id: user.id });

            // send response
            res.status(200).json({ access_token, name: user.fullName, id: user.id});
        } catch (error) {
            next(error);
        }
    }

    static async googleLogin(req, res, next) {
        try {
            // console.log(req.body);
            const { code } = req.body
            // console.log(code);
            const client = new OAuth2Client();
            // console.log(client);
            const ticket = await client.verifyIdToken({
                idToken: code,
                audience: process.env.GOOGLE_CLIENT_ID,
            });
            const payload = ticket.getPayload()
            const { email, sub, name } = payload;

            // console.log(ticket);
            const user = await User.findOne({
                where: {
                    email
                }
            })

            if (!user) {
                await User.create({
                    email,
                    fullName: name,
                    password: sub
                })
            }
            // console.log(user);
            const access_token = createToken({ id: user.id })
            // console.log(access_token);

            res.status(200).json({access_token, name: user.fullName, id: user.id});
        } catch (error) {
            console.log(error.message);
            next(error)
        }
    }
}

module.exports = AuthController;