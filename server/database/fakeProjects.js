var mongoose = require('mongoose');
var Project = require(paths.projectModel);

var _projects = [
    {
        "name": "Project ABC",
        "description": "First sample project fake data",
        "created_at": "2016-03-22T16:56:51-05:00",
        "updated_at": "2016-03-23T13:55:43-05:00",
        "creator": {
            "name": "Tiffany May",
            "avatar_url": "https://scontent-dfw1-1.xx.fbcdn.net/hprofile-xap1/v/t1.0-1/p50x50/11659244_686697957541_8531187982038741691_n.jpg?oh=ac582c25c065e82a8d204f456423e20b&oe=5788F8D5",
            "fullsize_avatar_url": "https://scontent-dfw1-1.xx.fbcdn.net/hphotos-xap1/v/t1.0-9/11659244_686697957541_8531187982038741691_n.jpg?oh=557a4943d2d7f8d9ca9c39e969d546f8&oe=57C04D23"
        }
    },
    {
        "name": "Project 123",
        "description": "Second sample project fake data",
        "created_at": "2016-03-22T16:56:51-05:00",
        "updated_at": "2016-03-23T13:55:43-05:00",
        "creator": {
            "name": "Tiffany May",
            "avatar_url": "https://scontent-dfw1-1.xx.fbcdn.net/hprofile-xap1/v/t1.0-1/p50x50/11659244_686697957541_8531187982038741691_n.jpg?oh=ac582c25c065e82a8d204f456423e20b&oe=5788F8D5",
            "fullsize_avatar_url": "https://scontent-dfw1-1.xx.fbcdn.net/hphotos-xap1/v/t1.0-9/11659244_686697957541_8531187982038741691_n.jpg?oh=557a4943d2d7f8d9ca9c39e969d546f8&oe=57C04D23"
        }
    },
    {
        "name": "Project XYZ",
        "description": "Third sample project fake data",
        "created_at": "2016-03-22T16:56:51-05:00",
        "updated_at": "2016-03-23T13:55:43-05:00",
        "creator": {
            "name": "Tiffany May",
            "avatar_url": "https://scontent-dfw1-1.xx.fbcdn.net/hprofile-xap1/v/t1.0-1/p50x50/11659244_686697957541_8531187982038741691_n.jpg?oh=ac582c25c065e82a8d204f456423e20b&oe=5788F8D5",
            "fullsize_avatar_url": "https://scontent-dfw1-1.xx.fbcdn.net/hphotos-xap1/v/t1.0-9/11659244_686697957541_8531187982038741691_n.jpg?oh=557a4943d2d7f8d9ca9c39e969d546f8&oe=57C04D23"
        }
    }
];

module.exports = {
    createProjects: function() {
        _projects.forEach(function (project) {
            new Project(project).save();
        })
    }
}