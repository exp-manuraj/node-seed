'use strict';

/*
 +-----------------------------------------------------------+
 | Module Name: Security                                     |
 | Module Purpose: Middleware for manage the security        |
 +-----------------------------------------------------------+
*/

var jwt = require('jsonwebtoken');
var failure = require('./../helpers/helper.response').failure;
var HTTP = require('./../helpers/helper.http');

module.exports.auth = function(req, res, next) {

    req.user = {};
    
    var config = req.app.get('config');

    var bearerToken = req.headers.authorization;

    // check header or url parameters or post parameters for token
    if (!bearerToken)
        return res.json(failure('Invalid Authentication Token', HTTP.FORBIDDEN));

    var bearer = bearerToken.split(' ')[0].toLowerCase();
    var token = bearerToken.split(' ')[1];

    if (bearer != 'bearer' || !token)
        return res.json(failure('Invalid Authentication Token', HTTP.FORBIDDEN));

    // verifies secret and checks exp
    jwt.verify(token, config.secret_key, function(err, decoded) {

        if (err) {
            return res.json(failure('Invalid Authentication Token', HTTP.FORBIDDEN));
        } else {

           next();

        }
    });

};

