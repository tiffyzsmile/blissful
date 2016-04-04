var express = require('express');        // call express
var router = express.Router();          // call the packages we need

var React = require('react');
var ReactDOMServer = require('react-dom/server');

var http = require('http');
var App = React.createFactory(require(paths.app))

require('babel-register');  //not sure yet but errors out without it

router.route('/users')
    .get(function(req, res) {
        // var userPage = require(paths.userPage);
        var application = React.createFactory(App);
        http.get("http://localhost:8080/api/users", function(res2) {
            res2.on('data', function (doc) {
                console.log('BODY: ' + doc);
                var props = {
                    users: doc
                };
                var generated = ReactDOMServer.renderToString(application(props));
                console.log("generated",generated);
                res.render(paths.indexPage, {reactOutput: generated});
            });

        }).on('error', function(e) {
            console.log("Got error: " + e.message);
        });

    });



// on routes that end in /users/:user_id
// ----------------------------------------------------
router.route('/users/:user_id')

    // get the user with that id (accessed at GET http://localhost:8080/users/:user_id)
    .get(function(req, res) {
        var manageUserPage = require(paths.manageUserPage);
        var application = React.createFactory(manageUserPage);
        http.get("http://localhost:8080/api/users/"+req.params.user_id, function(res2) {
            res2.on('data', function (doc) {
                console.log('BODY: ' + doc);
                var generated = ReactDOMServer.renderToString(application({
                    user: doc
                }));
                res.render(paths.indexPage, {reactOutput: generated});
            });
        }).on('error', function(e) {
            console.log("Got error: " + e.message);
        });
    });

module.exports = router;