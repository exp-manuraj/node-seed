
/*** Everything to GOD ***/

const express = require('express');

const app = express();

require('./app/startup/dotenv')();
require('./app/startup/prod')(app);
require('./app/startup/parser')(app);
require('./app/startup/cors')(app);
require('./app/startup/database');
require('./router')(app);
require('./app/startup/errorHandler')(app);

module.exports = app;
