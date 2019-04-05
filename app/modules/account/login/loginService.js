'use strict';

/*
 +-----------------------------------------------------------+
 | Module Name: Login Controller	                         |
 | Module Purpose: Manage the api's for registration         |
 | Author: Manuraj.M                                         |
 +-----------------------------------------------------------+
*/

const HttpStatus = require('http-status-codes');

const GenHelper = require( __base + 'app/helpers/generalHelper');
const Constant = require(__base +  'app/helpers/constantHelper');

/**
 * Do Login
 * @author Manuraj M
 * @return json
 * @createdOn 18-May-2016
 */

const login = async (req, res, cb) => {

    try {

        let isvalid = await validate(req);
        let user    = await get();
				let isAuth  = await authenticate(user);
				let op      = await doFormat(user);
				return res.status(HttpStatus.OK).message('login-success').success(op);
		
    } catch (e) {
        return res.status(HttpStatus.BAD_REQUEST).failure(e);
    }
}

/**
 * Validate the request payload
 * @author Manuraj M
 * @return json
 * @createdOn 18-May-2016
 */

const validate = (req) => {

	var reqBody = req.body;

	if (!reqBody.email)
		throw new Error('Email is required!');

	if(!GenHelper.isvalidEmail(reqBody.email))
		throw new Error('We require a valid email format!');

	if (!reqBody.password)
		throw new Error('Password is required!');
}


/**
 * Query for get the user details
 * @author Manuraj M
 * @return json
 * @createdOn 18-May-2016
 */

const get = () => {
	return;
}

/**
 * Query for get the user details
 * @author Manuraj M
 * @return json
 * @createdOn 18-May-2016
 */

const authenticate = (user) => {
	return user;
}

/**
 * Do Response Format
 * @author Manuraj M
 * @return json
 * @createdOn 18-May-2016
 */

const doFormat = (user) => {

	var op = {
		login : 'success'
	};

	return op;
}


module.exports = {
	login: login
};