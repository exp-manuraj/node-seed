
// Common routes for user module api's

var initCtrl = require('./init/ctrl.init');
var loginCtrl = require('./login/ctrl.login');

module.exports = function(app){
    
    app.get( '/', initCtrl.init );
    app.post( '/login', loginCtrl.login );
}