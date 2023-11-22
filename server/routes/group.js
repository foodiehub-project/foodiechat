const express = require('express');
const multer = require("multer");

const router = express.Router();
const storage = multer.memoryStorage();
const GroupController = require('../controllers/GroupController');
const { authorizationAdminOnly } = require('../middlewares/authorization');

router.post("/", GroupController.addGroups);

router.get("/:groupId", GroupController.getGroupById);

router.delete("/:groupId", authorizationAdminOnly, GroupController.deleteGroup);

module.exports = router;