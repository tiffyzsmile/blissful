var mongoose = require('mongoose');

var ProjectSchema = {
    id:String,
    name:String,
    description: String,
    created_at: Date,
    updated_at: Date,
    creator: {
        name:String,
        avatar_url:String,
        fullsize_avatar_url:String
    }
};

module.exports = mongoose.model('Project',ProjectSchema,"projects");