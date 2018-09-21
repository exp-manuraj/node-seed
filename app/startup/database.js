const mongoose = require('mongoose');
let config = process.env;
var authentication = (config.DB_USER && config.DB_PASS) ? config.DB_USER + ':' + config.DB_PASS + '@' : "";
var connectionString = 'mongodb://' + authentication + config.DB_HOST + '/' + config.DB_NAME + config.DB_OPTIONS;
// mongoose.connect(connectionString); 