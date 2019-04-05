
const failure = require('./../helpers/responseHelper').failure;

module.exports = (app) => {

    process.on('unhandledRejection', function (err, p) {
        console.log("unhandledRejection=>", err);
        process.exit(1);
    });

    process.on('unhandledException', function (err, p) {
        console.log("unhandledException=>", err);
        process.exit(1);
    });
}