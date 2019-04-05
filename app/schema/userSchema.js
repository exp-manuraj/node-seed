var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name : String
}, {
    collection:'user',
    versionKey: false,
    timestamps: true,
    toObject: {
      virtuals: true
    },
    toJSON: {
      virtuals: true 
    }
});

module.exports = mongoose.model('user', UserSchema);
console.log('user created!');