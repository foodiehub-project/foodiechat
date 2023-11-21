'use strict';
const express = require('express');

const AuthController = require('../controllers/AuthController');
const GroupController = require('../controllers/GroupController');
const groupRouter = require('./group.js');
const userGroupRouter = require('./userGroup.js');
const userRouter = require('./user.js')

const errorHandler = require('../middlewares/errorHandler');
const authentication = require('../middlewares/authentication');

const router = express.Router();

router.post('/auth/google/callback', AuthController.googleLogin);

router.use(authentication);

router.use('/groups', groupRouter);

router.use('/user-groups', userGroupRouter);

router.use('/users', userRouter);

router.use(errorHandler);

module.exports = router;