const express = require('express');
const multer = require("multer");

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const GroupController = require('../controllers/GroupController');

router.get("/", GroupController.addGroups);

module.exports = router;