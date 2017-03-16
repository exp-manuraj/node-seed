
/* Everything to GOD */

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');
var compression = require('compression');
var mongoose = require('mongoose');
var fs = require('fs');

var failure = require('./app/helpers/helper.response').failure;
var config = require('./app/config');

var app = express();

// CORS
app.use(cors());

// Compression
app.use(compression());

// configuration
config = new config();
app.set('config', config);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Database connection
var authentication = (config.db.user && config.db.pass) ? config.db.user + ':' + config.db.pass + '@' : "";
var connectionString = 'mongodb://' + authentication + config.db.hosts + '/' + config.db.name + config.db.options;
mongoose.connect(connectionString);


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
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
  // set locals, only providing error in development
  // res.locals.message = err.message;
  // res.locals.error = req.app.get('env') === 'development' ? err : {};

  // // render the error page
  // res.status(err.status || 500);
  res.json(failure(err.message, err.status));
  
});

module.exports = app;
