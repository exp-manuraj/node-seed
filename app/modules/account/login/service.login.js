'use strict';

/*
 +-----------------------------------------------------------+
 | Module Name: Login Service	                             |
 | Module Purpose: Manage the api's for registration         |
 | Author: Manuraj.M                                         |
 +-----------------------------------------------------------+
*/

var Q = require('q');

var failure = require( __base + 'app/helpers/helper.response').failure;
var success = require( __base + 'app/helpers/helper.response').success;
var GenHelper = require( __base + 'app/helpers/helper.general');
var Http = require( __base + 'app/helpers/helper.http');
var Const = require( __base +  'app/helpers/helper.constant');

var locals = {};

/**
 * Do Login
 * @author Manuraj M
 * @return json
 * @createdOn 18-May-2016
 */

function login(req, cb) {

	locals = req;

	Q.fcall(validate)
		.then(get)
		.then(authenticate)
		.then(doResponseFormat)
		.then(function(op) {
			return cb(null, success('Logged in successfully!', op));
		})
		.fail(function(reason) {
			return cb(failure(reason, Http.FORBIDDEN));
		})
		.done();
}



/**
 * Validate the request payload
 * @author Manuraj M
 * @return json
 * @createdOn 18-May-2016
 */

function validate() {

	var reqBody = locals.body;

	if (!reqBody.email)
		throw new Error('Email is required!');

	if(!GenHelper.isvalidEmail(reqBody.email))
		throw new Error('Email required a valid format!');

	if (!reqBody.password)
		throw new Error('Password is required!');
}


/**
 * Query for get the user details
 * @author Manuraj M
 * @return json
 * @createdOn 18-May-2016
 */

function get() {
	// return Q(User.findOne({email:locals.body.email}).exec());
	return;
}

/**
 * Query for get the user details
 * @author Manuraj M
 * @return json
 * @createdOn 18-May-2016
 */

function authenticate(user) {
	
	if(!user)
		throw new Error('Access is denied due to invalid credentials!');

}

/**
 * Do Response Format
 * @author Manuraj M
 * @return json
 * @createdOn 18-May-2016
 */

function doResponseFormat(user) {

	// Generate token
	var token = jwt.sign({
		_id: user._id,
		time: new Date().getTime()
	}, locals.__config.secret_key);

	var op = {
		_id : user._id,
		name:user.name,
	};

	return op;
}


module.exports = {
	login: login
};