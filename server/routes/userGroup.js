const express = require('express');
const UserGroupsController = require('../controllers/UserGroupsController');
const router = express.Router();

router.get('/', UserGroupsController.getMyGroups);

router.post('/:userGroupId', UserGroupsController.addMember);

router.delete('/:userGroupId', UserGroupsController.leaveGroup);

module.exports = router;