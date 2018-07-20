'use strict';

/*
 +-----------------------------------------------------------+
 | Module Name: Security                                     |
 | Module Purpose: Middleware for manage the security        |
 +-----------------------------------------------------------+
*/

const jwt = require('jsonwebtoken');

module.exports.auth = function(req, res, next) {

    req.user = {};

    next();
    
};

