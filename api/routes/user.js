const express = require('express');
const router = express.Router();
const userController = require('../controller/user');

router.get('/',userController.get_users);
router.post('/',userController.create_user);

module.exports = router;


