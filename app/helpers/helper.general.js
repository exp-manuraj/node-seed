/*
 +-----------------------------------------------------------+
 | Module Name: GENERAL HELPER                               | 
 | Module Purpose: Manage the general functions              |
 | Author: Manuraj.M                                         |
 +-----------------------------------------------------------+
*/

'use strict';

/**
 * Get today date
 * @author Manuraj M
 * @return json
 * @createdOn 14-Mar-2017
 */

var today = function(){
    return new Date();
};

/**
 * Get today date in Milliseconds
 * @author Manuraj M
 * @return json
 * @createdOn 14-Mar-2017
 */

var todayMilliseconds = function(){
    return new Date().getTime();
};

/**
 * valid email
 * @author Manuraj M
 * @return json
 * @createdOn 14-Mar-2017
 */

var isvalidEmail = function(email){
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
};

module.exports = {
    today : today,
    todayMilliseconds:todayMilliseconds,
    isvalidEmail:isvalidEmail
}