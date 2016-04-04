"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var ProjectStore = require('../../stores/ProjectStore.jsx');
var ProjectActions = require('../../actions/ProjectActions.jsx');
var ProjectList = require('./projectList.jsx');

var ProjectPage = React.createClass({
	getInitialState: function() {
		return {
			projects: ProjectStore.getAllProjects()
		};
	},

	componentWillMount: function() {
		// ProjectStore.addChangeListener(this._onChange);
	},

	//Clean up when this component is unmounted
	componentWillUnmount: function() {
		// ProjectStore.removeChangeListener(this._onChange);
	},

	_onChange: function() {
		this.setState({ projects: ProjectStore.getAllProjects() });
	},

	render: function() {
		return (
			<div>
				<h1>Projects</h1>
				<Link to="addProject" className="btn btn-default">Add Project</Link>
				<ProjectList projects={this.state.projects} />
			</div>
		);
	}
});

module.exports = ProjectPage;