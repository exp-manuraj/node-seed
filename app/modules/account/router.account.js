
// Common routes for this module

const express = require('express');
const router = express.Router();

const initCtrl = require('./init/ctrl.init');
const loginCtrl = require('./login/ctrl.login');

router.get( '/', initCtrl.init);
router.post( '/login', loginCtrl.login );

module.exports = router;