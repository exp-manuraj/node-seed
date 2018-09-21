const dotenv = require('dotenv');

module.exports = function() {

  const config = dotenv.config();

  if (config.error) {
    throw new Error(config.error);
  }
}