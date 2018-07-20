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

    var pattern = results;
    return pattern;
};

/**
 * Failure response helper
 * @author Manuraj M
 * @return json
 * @createdOn 14-Mar-2017
 */

var failure = (e,type,code,param) => {
    
    var pattern = {
        error:{
            message : e.message,
            type: type,
            code : (code) ? code : HttpStatus.BAD_REQUEST,
            param: param
        }
    };
    
    return pattern;
};

module.exports = {
    success : success,
    failure : failure
}
