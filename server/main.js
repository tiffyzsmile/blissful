// set global paths to access path aliases from any module
paths           = require('../paths.js')

// call the packages we need
var express     = require('express');        // call express
var app         = express();                 // define our app using express
var parser      = require('body-parser');

// configure app to use parser() - this will let us get the data from a POST
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// middleware to use for all requests
router.use(function(req, res, next) {
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});


// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});




// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

//User routes
var userApiRoutes = require(paths.userApiRoutes);  //pulls in the user routes from users.js
app.use('/api', userApiRoutes); //sets up the user api routes

//Project Routes
var projectApiRoutes = require(paths.projectApiRoutes);  //pulls in the project routes from projects.js
app.use('/api', projectApiRoutes); //sets up the project api routes


// var userAppRoutes = require(paths.userAppRoutes);  //pulls in the user routes from users.js
// app.use('/', userAppRoutes); //sets up the user app routes
//
// var projectAppRoutes = require(paths.projectAppRoutes);  //pulls in the user routes from projects.js
// app.use('/', projectAppRoutes); //sets up the project app routes

// this allows us to see all our static/processed files
app.use(express.static(paths.distFolder));

var homeAppRoutes = require(paths.homeAppRoutes);
app.use('/*', homeAppRoutes);




// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);


// Connect to the database
// =============================================================================
require(paths.database);


//
//
// var passport = require('passport');
// var session = require('express-session');
//
// var React = require('react');
// var ReactDOMServer = require('react-dom/server');
//
// var ProjectItem = require(paths.projectModel);
//
// var auth = require('./routes/auth');
//
// require('babel-register');
//

// app.get('/users', function (req, res) {
//     //res.render('./../app/index.ejs',{});
//     var application = React.createFactory(require('./../app/components/users/userPage.jsx'));
//
//     User.find(function (error, doc) {
//         var generated = ReactDOMServer.renderToString(application({
//             users: doc
//         }));
//         res.render('./../app/index.ejs', {reactOutput: generated});
//     })
//
// });
// app.get('/', function (req, res) {
//     //res.render('./../app/index.ejs',{});
//     var application = React.createFactory(require('./../app/components/project-item/ProjectItemList.jsx'));
//
//     ProjectItem.find(function (error, doc) {
//         var generated = ReactDOMServer.renderToString(application({
//             items: doc
//         }));
//         res.render('./../app/index.ejs', {reactOutput: generated});
//     })
//
// });
//
// app.use(session({
//     secret: 'anything',
//     resave: true,
//     saveUninitialized: true
// }));
//
// require('./config/passport')(app);
//
//
// app.use('/users', users);
// app.use('/auth', auth);
// app.use(express.static(__dirname + '/../.tmp')).listen(7777);
//
//
//
// require('./routes/items.js', './routes/projects.js')(app);