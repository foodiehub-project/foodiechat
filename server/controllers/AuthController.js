'use strict';
const { createToken } = require('../helpers/jwt');
const { User } = require('../models');
const { OAuth2Client } = require('google-auth-library');

class AuthController {
    static async googleLogin(req, res, next) {
        try {
            // console.log(req.body);
            const { code } = req.body
            // console.log(code);
            const client = new OAuth2Client();

            const ticket = await client.verifyIdToken({
                idToken: code,
                audience: process.env.GOOGLE_CLIENT_ID,
            });
            const payload = ticket.getPayload()
            const { email, sub, name } = ticket.getPayload();

            // console.log(ticket);
            const user = await User.findOrCreate({ where: { email, password: sub, fullName: name } });
            // console.log(user);
            const access_token = createToken({ id: user[0].id })
            // console.log(access_token);

            res.status(200).json(access_token);
        } catch (error) {
            console.log(error.message);
            next(error)
        }
    }
}

module.exports = AuthController;