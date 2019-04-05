
// Common routes for this module

const express = require('express');
const router = express.Router();

const initService = require('./init/initService');
const loginService = require('./login/loginService');

router.get( '/', initService.init);
router.post('/login', loginService.login );

module.exports = router;