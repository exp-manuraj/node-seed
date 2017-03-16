
// Common routes for user module api's

var InitCtrl = require('./init/ctrl.init');

module.exports = function(app){
    
    app.get( '/', InitCtrl.init );
}