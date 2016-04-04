var express = require('express');        // call express
var router = express.Router();          // call the packages we need

var React = require('react');
var ReactDOMServer = require('react-dom/server');

require('babel-register');  //not sure yet but errors out without it

router.route('/')
    .get(function(req, res) {
        var homePage = require(paths.homePage);
        var application = React.createFactory(homePage);
        var generated = ReactDOMServer.renderToString(application({}));
        res.render(paths.indexPage, {reactOutput: generated});
    });

module.exports = router;