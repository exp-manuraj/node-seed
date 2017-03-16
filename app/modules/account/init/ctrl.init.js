/*
 +-----------------------------------------------------------+
 | Module Name: Init Controller	                             |
 | Module Purpose: Check the api is up                       |
 | Author: Manuraj.M                                         |
 +-----------------------------------------------------------+
*/

'use strict';

var InitService = require('./service.init');

/**
 * Init Controller
 * @author Manuraj M
 * @return json
 * @createdOn 14-Mar-2017
 */

function init(req, res, next) {
    InitService.init(req,function(err, response) {
        if (err) return res.send(err);
        return res.send(response);
    });
}

module.exports = {
	init:init
}
