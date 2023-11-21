'use strict';
const express = require('express');
const multer = require("multer");

const AuthController = require('../controllers/AuthController');
// const GroupController = require('../controllers/GroupController');

const errorHandler = require('../middlewares/errorHandler');
const authentication = require('../middlewares/authentication');

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/auth/google/callback', AuthController.googleLogin);

router.use(authentication);

// router.post('/groups', GroupController.createGroup);

router.use(errorHandler);

module.exports = router;