const express = require('express');
const UserGroupsController = require('../controllers/UserGroupsController');
const {authorizationAdminOnly, authorizationMemberOnly} = require('../middlewares/authorization');
const router = express.Router();

router.get('/', UserGroupsController.getMyGroups);

router.post('/:groupId', authorizationAdminOnly, UserGroupsController.addMember);

router.delete('/:groupId', authorizationMemberOnly, UserGroupsController.leaveGroup);

module.exports = router;