module.exports = function (language) {
    
    var lang = {};
  
    switch (language) {
      case 1:
        lang = require('./en');
        break;
  
      case 2:
        lang = require('./ar');
        break;
  
      default:
        console.error('Language is not detected!');
        process.exit(1);
    }
  
    return lang;
  };