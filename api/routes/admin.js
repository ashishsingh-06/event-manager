const express = require('express');
const router = express.Router();
const adminController = require('../controller/admin');

router.post('/',adminController.admin_login);

module.exports = router;