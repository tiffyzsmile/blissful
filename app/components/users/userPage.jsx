"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var UserStore = require('../../stores/UserStore.jsx');
var UserActions = require('../../actions/UserActions.jsx');
var UserList = require('./userList.jsx');

var UserPage = React.createClass({
	contextTypes: {
		router: React.PropTypes.func
	},
	getInitialState: function() {
		console.log("this.props",this.props);
		return {
			users: UserStore.getAllUsers()
		};
	},

	componentWillMount: function() {
		// UserStore.addChangeListener(this._onChange);
	},

	//Clean up when this component is unmounted
	componentWillUnmount: function() {
		// UserStore.removeChangeListener(this._onChange);
	},

	_onChange: function() {
		this.setState({ users: UserStore.getAllUsers() });
	},

	render: function() {
		return (
			<div>
				<h1>Users</h1>
				<a onClick={() => this.props.history.pushState(null, '/addUser') } className="btn btn-default">Add User</a>
				<UserList users={this.state.users} />
			</div>
		);
	}
});

module.exports = UserPage;