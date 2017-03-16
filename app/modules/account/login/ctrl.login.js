'use strict';

/*
 +-----------------------------------------------------------+
 | Module Name: Login Controller	                         |
 | Module Purpose: Manage the api's for login                |
 | Author: Manuraj.M                                         |
 +-----------------------------------------------------------+
*/

var LoginService = require('./service.login');

/**
 * Login Controller
 * @author Manuraj M
 * @return json
 * @createdOn 14-Mar-2017
 */

function login(req, res, next) {
    LoginService.login(req,function(err, response) {
        if (err) return res.json(err);
        return res.json(response);
    });
}

module.exports = {
	login:login
}
