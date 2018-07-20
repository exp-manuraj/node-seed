/*
 +-----------------------------------------------------------+
 | Module Name: Init Service	                             |
 | Module Purpose: Ensure the api is working 		         |
 | Author: Manuraj.M                                         |
 +-----------------------------------------------------------+
*/

'use strict'

const HttpStatus = require('http-status-codes');

const failure = require( __base + 'app/helpers/helper.response').failure;

/**
 * Init API
 * @author Manuraj M
 * @return json
 * @createdOn 14-Mar-2017
 * @modifiedOn 12-Oct-2017
 */

const init = async (req, res, next) => {
	
	try {
		const response = await doFormat();
		return res.status(HttpStatus.OK).send( response );
	} catch (e) {
		return res.status(HttpStatus.BAD_REQUEST).send( failure(e) );
	}
}

/**
 * Do Response Format
 * @author Manuraj M
 * @return json
 * @createdOn 14-Mar-2017
 * @modifiedOn 12-Oct-2017
 */

const doFormat = () => {
	
	let config = process.env.config;

	var op = {
		api : config.project_name,
        version: config.version,
        date: new Date().getTime()
	};

	return op;
}


module.exports = {
	init: init
};