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

const today = () => {
    return new Date();
};

/**
 * Get today date in Milliseconds
 * @author Manuraj M
 * @return json
 * @createdOn 14-Mar-2017
 */

const todayMilliseconds = () => {
    return new Date().getTime();
};

/**
 * valid email
 * @author Manuraj M
 * @return json
 * @createdOn 14-Mar-2017
 */

const isvalidEmail = (email) => {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
};

/**
 * Capitalized first letter
 * @author Manuraj M
 * @return json
 * @createdOn 14-Mar-2017
 */

const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * Convert string with dashes to camelCase string
 * @author Manuraj M
 * @param str {String} A string that may contain dashes
 * @returns {String} A camelCase string
 * @createdOn 14-Mar-2017
 */
const camelCase = (str) => {
    var result = str.replace(/-([a-z])/ig, function(word, letter) {
        return letter.toUpperCase();
    });
    return result;
}

/**
 * Get humanized time
 * @author Manuraj M
 * @return json
 * @createdOn 14-Mar-2017
 */

const getTimeFromMilliSeconds = (ms) => {
    let d, h, m, s;
    s = Math.floor(ms / 1000);
    m = Math.floor(s / 60);
    s = s % 60;
    h = Math.floor(m / 60);
    m = m % 60;
    d = Math.floor(h / 24);
    h = h % 24;
    let corrected_time = h+':'+m+':'+s;
    return corrected_time;
}

/**
 * Check its a valid URL
 * @author Manuraj M
 * @return json
 * @createdOn 14-Mar-2017
*/

const isValidURL = (str) => {
    let regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
    if(!regex .test(str)) {
      return false;
    } else {
      return true;
    }
}

module.exports = {
    today : today,
    todayMilliseconds:todayMilliseconds,
    isvalidEmail:isvalidEmail,
    capitalizeFirstLetter:capitalizeFirstLetter,
    getTimeFromMilliSeconds:getTimeFromMilliSeconds,
    isValidURL:isValidURL,
    camelCase:camelCase
}