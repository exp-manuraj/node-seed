module.exports = function () {
  
  var config = {};
  
  switch (process.env.NODE_ENV) {
    case 'production':
      config = require('./env/production.json');
      break;

    case 'development':
      config = require('./env/development.json');
      break;

    case 'testing':
      config = require('./env/testing.json');
      break;

    default:
      console.error('NODE_ENV environment variable not set');
      process.exit(1);
  }

  return config;
};