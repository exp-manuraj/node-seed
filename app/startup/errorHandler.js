
const failure = require('./../helpers/helper.response').failure;

module.exports = (app) => {

    // catch 404 and forward to error handler
    /* app.use('*',function(req, res) {
        res.status(404);
        res.send(failure({ message: 'Missing resource'} ,404));
    }); */

    // error handler
    /* app.use(function (req, res, next) {
        console.log("Eneter here 2");
        //res.json(failure(err.message, err.status));
    }); */

    process.on('unhandledRejection', function (err, p) {
        console.log("unhandledRejection=>", err);
        process.exit(1);
    });

    process.on('unhandledException', function (err, p) {
        console.log("unhandledException=>", err);
        process.exit(1);
    });
}