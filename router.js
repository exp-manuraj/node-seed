
module.exports = function(app){

    var modules = [
        'common',           // Common Modules
        'account'              // User Modules
    ];
    
    modules.forEach(function(module){
        var moduleRoutes = __dirname+'/app/modules/' + module + '/' + module + '.router.js';
        require(moduleRoutes)(app);
    });
    
}
