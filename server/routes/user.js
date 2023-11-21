const express = require('express');
const multer = require("multer");
const UserController = require('../controllers/UserController');

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.put('/:userId', upload.single('imgUrl'), UserController.editProfile)

module.exports = router;