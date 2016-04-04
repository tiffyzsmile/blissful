"use strict";

var React = require('react');
var Input = require('../common/textInput.jsx');

var ProjectForm = React.createClass({
	propTypes: {
		project:	React.PropTypes.object.isRequired,
		onSave:	React.PropTypes.func.isRequired,
		onChange: React.PropTypes.func.isRequired,
		errors: React.PropTypes.object
	},

	render: function() {
		return (
			<form>
				<h1>Manage Project</h1>
				<Input
					name="firstName"
					label="First Name"
					value={this.props.project.firstName}
					onChange={this.props.onChange}
					error={this.props.errors.firstName} />

				<Input
					name="lastName"
					label="Last Name"
					value={this.props.project.lastName}
					onChange={this.props.onChange}
					error={this.props.errors.lastName} />

				<input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave} />
			</form>
		);
	}
});

module.exports = ProjectForm;