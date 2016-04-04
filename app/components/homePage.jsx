"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Home = React.createClass({
	render: function() {
		return (
			<div className="jumbotron">
				<h1>Welcome!</h1>
				<p>To my grand attempt to learn React! : )</p>
			</div>
		);
	}
});

module.exports = Home;