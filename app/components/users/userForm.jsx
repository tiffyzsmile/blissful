"use strict";

var React = require('react');
var Input = require('../common/textInput.jsx');

var UserForm = React.createClass({
	propTypes: {
		user:	React.PropTypes.object.isRequired,
		onSave:	React.PropTypes.func.isRequired,
		onChange: React.PropTypes.func.isRequired,
		errors: React.PropTypes.object
	},

	render: function() {
		return (
			<form>
				<h1>Manage User</h1>
				<Input
					name="displayName"
					label="Display Name"
					value={this.props.user.displayName}
					onChange={this.props.onChange}
					error={this.props.errors.displayName} />
				<Input
					name="firstName"
					label="First Name"
					value={this.props.user.firstName}
					onChange={this.props.onChange}
					error={this.props.errors.firstName} />

				<Input
					name="lastName"
					label="Last Name"
					value={this.props.user.lastName}
					onChange={this.props.onChange}
					error={this.props.errors.lastName} />

				<input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave} />
			</form>
		);
	}
});

module.exports = UserForm;