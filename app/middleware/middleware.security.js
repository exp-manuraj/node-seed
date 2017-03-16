'use strict';

/*
 +-----------------------------------------------------------+
 | Module Name: Security                                     |
 | Module Purpose: Middleware for manage the security        |
 +-----------------------------------------------------------+
*/

var jwt = require('jsonwebtoken');
var failure = require('./../helpers/response_helper').failure;
var HTTP = require('./../helpers/http');
var User = require('./../schema/User');

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

            User.findById(decoded._id).exec().then(function(user) {

                if (!user)
                    return res.json(failure('We cannot authenticate a user with the token!', HTTP.FORBIDDEN));

                req.user = {
                    _id: user._id,
                    name: user.name,
                    email: user.p.email,
                    user_type: user.user_type,
                    is_admin: decoded.is_admin
                };

                next();

            });

        }
    });

};

