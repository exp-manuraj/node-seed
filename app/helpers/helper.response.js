/*
 +-----------------------------------------------------------+
 | Module Name: RESPONSE HELPER                              |
 | Module Purpose: Manage the api responses                  |
 | Author: Manuraj.M                                         |
 +-----------------------------------------------------------+
*/

'use strict';

/**
 * Success response helper
 * @author Manuraj M
 * @return json
 * @createdOn 14-Mar-2017
 */

var success = function(message,results){
    return ({
            status: 1,
            message: message,
            data: results
    });
};

/**
 * Failure response helper
 * @author Manuraj M
 * @return json
 * @createdOn 14-Mar-2017
 */

var failure = function(message) {
    return ({
            status: 0,
            message: message.toString(),
            data: null
    });
};

module.exports = {
    success : success,
    failure : failure
}
