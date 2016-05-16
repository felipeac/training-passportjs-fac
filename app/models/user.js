// load the things we need
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

//user model schema
var userSchema = mongoose.Schema({
    local            : {
        email        : String,
        password     : String
    },
    facebook         : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    },
    twitter          : {
        id           : String,
        token        : String,
        displayName  : String,
        username     : String
    },
    google           : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    },
    linkedin           : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    }
});

//password hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

//check if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

//create the model for users and expose it for the app
module.exports = mongoose.model('User', userSchema);

