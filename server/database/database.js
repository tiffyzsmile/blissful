var mongoose = require('mongoose');
var fakeProjects = require('./fakeProjects.js');
var fakeUsers = require('./fakeUsers.js');

mongoose.connect('mongodb://localhost/blissful', function () {
    console.log("connected.");

    mongoose.connection.db.dropDatabase();

    fakeProjects.createProjects();
    fakeUsers.createUsers();
});