var express = require('express');        // call express
var router = express.Router();          // call the packages we need

var React = require('react');
var ReactDOMServer = require('react-dom/server');

var http = require('http');

require('babel-register');  //not sure yet but errors out without it

router.route('/projects')
    .get(function(req, res) {
        var projectPage = require(paths.projectPage);
        var application = React.createFactory(projectPage);

            http.get("http://localhost:8080/api/projects", function(res2) {
                res2.on('data', function (doc) {
                    console.log('BODY: ' + doc);
                    var generated = ReactDOMServer.renderToString(application({
                        projects: doc
                    }));
                    res.render(paths.indexPage, {reactOutput: generated});
                });

            }).on('error', function(e) {
                console.log("Got error: " + e.message);
            });

    });

module.exports = router;