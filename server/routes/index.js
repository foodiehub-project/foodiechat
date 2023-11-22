'use strict';
const express = require('express');

const AuthController = require('../controllers/AuthController');
const HomeController = require('../controllers/HomeController.js');
const groupRouter = require('./group.js');
const userGroupRouter = require('./userGroup.js');
const userRouter = require('./user.js')

const errorHandler = require('../middlewares/errorHandler');
const authentication = require('../middlewares/authentication');

const router = express.Router();

router.get('/', HomeController.statusServer);

router.post('/login', AuthController.login);

router.post('/auth/google/callback', AuthController.googleLogin);

router.use(authentication);

router.use('/groups', groupRouter);

router.use('/user-groups', userGroupRouter);

router.use('/users', userRouter);

router.use(errorHandler);

module.exports = router;