const express = require('express');
const multer = require("multer");

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const GroupController = require('../controllers/GroupController');
const authorizationAdminOnly = require('../middlewares/authorization');

router.post("/", GroupController.addGroups);

router.delete("/:groupId", GroupController.deleteGroup);

module.exports = router;