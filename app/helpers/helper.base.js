/*
 +-----------------------------------------------------------+
 | Module Name: BASE SERVICE HELPER                          | 
 | Module Purpose: Manage the base functions                 |
 +-----------------------------------------------------------+
*/

'use strict';

/**
 * Extends target object with source object
 * @author Manuraj M
 * @param target {Object} target object to extend
 * @param target {Object} source object
 * @returns {Object} extended target object
 * @createdOn 4-Apr-2017
 */

const extend = (target, source) => {
    for (var key in source) {
        if (source.hasOwnProperty(key)) {
            target[key] = source[key];
        }
    }
    return target;
}

/**
 * To flatten an array of single element arrays, you don't need to import a library.
 * @author Manuraj M
 * @param target {arr} Array of elements
 * @usage flatten([[1, 2, 3], [4, 5]]);
 * @createdOn 4-Apr-2017
 */

const flatten = (arr) => {
    return arr.reduce(function (flat, toFlatten) {
        return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
    }, []);
}

module.exports = {
    extend: extend
}