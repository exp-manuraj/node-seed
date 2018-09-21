
let glob = require("glob");

module.exports = function(app){

    global.__base = __dirname + '/';

    // options is optional
    let options = {};

    glob("**/router.*.js", options , function (er, files) {
        // files is an array of filenames.
        // If the `nonull` option is set, and nothing
        // was found, then files is ["**/*.js"]
        // er is an error object or null.
        
        files.forEach(function(file){
            app.use('/', require(__base+file));
        });
    });
}
