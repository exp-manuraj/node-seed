
/** Everything to GOD **/

const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const compression = require('compression');
const mongoose = require('mongoose');
const fs = require('fs');
const helmet = require('helmet');
const failure = require('./app/helpers/helper.response').failure;
let config = require('./app/config');

const app = express();

// Cors
app.use(cors());
// Helmet
app.use(helmet());
// Compression
app.use(compression());
// configuration
config = new config();
app.set('config', config);

// Set global scopes
global.__config = config;
global.__base = __dirname + '/';
global.BaseService = require('./app/helpers/helper.base');
global.Err = require('./app/helpers/helper.error');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Database connection
/* var authentication = (config.db.user && config.db.pass) ? config.db.user + ':' + config.db.pass + '@' : "";
var connectionString = 'mongodb://' + authentication + config.db.hosts + '/' + config.db.name + config.db.options;
mongoose.connect(connectionString); */
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var router = require('./router')(app);
// catch 404 and forward to error handler
app.use(function(err,req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  res.json(failure(err.message, err.status));
});

module.exports = app;
