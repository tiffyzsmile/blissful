"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var ProjectActions = require('../../actions/ProjectActions.jsx');
var toastr = require('toastr');

var ProjectList = React.createClass({
	propTypes: {
		projects: React.PropTypes.array.isRequired
	},

	deleteProject: function(id, event) {
		event.preventDefault();
		ProjectActions.deleteProject(id);
		toastr.success('Project Deleted');
	},

	render: function() {
		var createProjectRow = function(project) {
			return (
				<tr key={project._id}>
					<td><a href="#" onClick={this.deleteProject.bind(this, project._id)}>Delete</a></td>
					<td><Link to="manageProject" params={{id: project._id}}>{project._id}</Link></td>
					<td>{project.name}</td>
				</tr>
			);
		};

		return (
			<div>
				<table className="table">
					<thead>
						<tr>
							<th>Delete</th>
							<th>ID</th>
							<th>Name</th>
						</tr>
					</thead>
					<tbody>
						{this.props.projects.map(createProjectRow, this)}
					</tbody>
				</table>
			</div>
		);
	}
});

module.exports = ProjectList;