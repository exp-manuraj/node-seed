

var failure = require('../../helpers/response_helper').failure;
var success = require('../../helpers/response_helper').success;
var Q = require('q');
var fs = require('fs');
var _ = require('underscore');
var nodemailer = require("nodemailer");

function SendMail(options,template, cb) {
 
    for(var key in options){
        template = template.replace( new RegExp("{{%"+key+"%}}", "g"), options[key] );
    }

    var config   = options.req.app.get('config');

    // create reusable transporter object using SMTP transport
    var transporter = nodemailer.createTransport({
        service: config.smtp.service,
        auth: {
            user: config.smtp.email,
            pass: config.smtp.password
        }
    });

    var email;

    if(options.email){
        email = options.email;
    }
    
    // NB! No need to recreate the transporter object. You can use
    // the same transporter object for all e-mails
    // setup e-mail data with unicode symbols
    var mailOptions = {
        from: config.smtp.email_label + '<' + config.smtp.email + '>', // sender address
        //to:options.email,
        to: email, // list of receivers
        subject: options.subject, // Subject line
        html: template // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Message sent: ' + info.response);
            cb(null, 'success');
        }
    });
};

function GetTemplate(path, callback) {
    try {
        var filename = require.resolve(path);
        fs.readFile(filename, 'utf8', callback);
    } catch (e) {
        callback(e);
    }
}


/**
 * Send Forgot Password Email
 * @return json
 */

exports.SendForgotPasswordMail = function(options, cb) {
 
    GetTemplate('./templates/forgot-password.html', function(err, file) {
        SendMail(options,file,function(err,response){
            cb(null, response);
        });  
    });
}



