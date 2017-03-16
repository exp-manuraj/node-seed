/*
 +-----------------------------------------------------------+
 | Module Name: Init Service	                             |
 | Module Purpose: Ensure the api is working 		         |
 | Author: Manuraj.M                                         |
 +-----------------------------------------------------------+
*/

'use strict';

var Q = require('q');

var failure = require('../../../helpers/helper.response').failure;
var success = require('../../../helpers/helper.response').success;

var locals = {};

/**
 * Init API
 * @author Manuraj M
 * @return json
 * @createdOn 14-Mar-2017
 */

function init(req, cb) {

	locals = req;

	Q.fcall(doFormat)
		.then(function(op) {
			return cb(null, op);
		})
		.fail(function(reason) {
			return cb(failure(reason));
		})
		.done();
}

/**
 * Do Response Format
 * @author Manuraj M
 * @return json
 * @createdOn 14-Mar-2017
 */

function doFormat() {
	
	locals.config = locals.app.get('config');

	var op = {
		api : locals.config.project_name,
        version: locals.config.version,
        date: new Date().getTime()
	};

	return op;
}


module.exports = {
	init: init
};