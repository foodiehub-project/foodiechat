const express = require('express');
const multer = require("multer");

const GroupController = require('../controllers/GroupController');
const { authorizationAdminOnly } = require('../middlewares/authorization');

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post("/", upload.single('groupPicture'), GroupController.addGroups);

router.get("/:groupId", GroupController.getGroupById);

router.delete("/:groupId", authorizationAdminOnly, GroupController.deleteGroup);

module.exports = router;