
var glob = require("glob");

module.exports = function(app){
    // options is optional
    var options = {};
    glob("**/router.*.js", options , function (er, files) {
        // files is an array of filenames.
        // If the `nonull` option is set, and nothing
        // was found, then files is ["**/*.js"]
        // er is an error object or null.
        files.forEach(function(file){
            app.use('/', require(__base + file));
        });
    });
}
