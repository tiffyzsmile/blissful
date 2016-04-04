"use strict";

var React = require('react');

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;
var History = Router.browserHistory;
var Link = Router.Link;

var Homepage = require('./components/homePage.jsx');

var routes = (
    <Route name="app" path="/" handler={require('./components/app.jsx')} history={require('react-router').browserHistory}>
        <DefaultRoute handler={Homepage} />
            
        <Route name="users" handler={require('./components/users/userPage.jsx')} />
        <Route name="addUser" path="users/new" handler={require('./components/users/manageUserPage.jsx')} />
        <Route name="manageUser" path="users/:id" handler={require('./components/users/manageUserPage.jsx')} />


        <Route name="projects" handler={require('./components/projects/projectPage.jsx')} />
        <Route name="addProject" path="projects/new" handler={require('./components/projects/manageProjectPage.jsx')} />
        <Route name="manageProject" path="project/:id" handler={require('./components/projects/manageProjectPage.jsx')} />


        <NotFoundRoute handler={require('./components/notFoundPage.jsx')} />
        <Redirect from="awthurs" to="users" />
        <Redirect from="about/*" to="users" />
    </Route>
);

module.exports = routes;