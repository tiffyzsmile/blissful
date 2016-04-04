var mongoose = require('mongoose');


var UserSchema = {
    displayName: String,
    firstName: String,
    lastName: String,
    email: String,
    created_at: Date,
    updated_at: Date,
    avatar_url:String,
    fullsize_avatar_url:String,
    image: String,
    facebook: Object,
    twitter: Object,
    google: Object
};

module.exports = mongoose.model('User', UserSchema, 'users');