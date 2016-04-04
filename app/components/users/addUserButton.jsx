"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var AddUserButton = React.createClass({
    contextTypes: {
        router: React.PropTypes.func
    },
	render: function() {
		return (
        <nav className="navbar navbar-default">
            <Link to="addUser">Add User</Link>
        </nav>
		);
	}
});

module.exports = AddUserButton;
