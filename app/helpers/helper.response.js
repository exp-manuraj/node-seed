/*
 +-----------------------------------------------------------+
 | Module Name: RESPONSE HELPER                              |
 | Module Purpose: Manage the api responses                  |
 | Author: Manuraj.M                                         |
 +-----------------------------------------------------------+
*/

'use strict';

const HttpStatus = require('http-status-codes');

/**
 * Success response helper
 * @author Manuraj M
 * @return json
 * @createdOn 14-Mar-2017
 */

var success = (message,results,code) => {

    var pattern = {
        status: true,
        code : (code) ? code : HttpStatus.OK,
        message: message,
        data: results
    };
    
    return pattern;
};

/**
 * Failure response helper
 * @author Manuraj M
 * @return json
 * @createdOn 14-Mar-2017
 */

var failure = (e,code) => {
    
    var pattern = {
        status: false,
        code : (code) ? code : HttpStatus.BAD_REQUEST,
        message : e.message,
        data : null
    };
    
    return pattern;

};

module.exports = {
    success : success,
    failure : failure
}
