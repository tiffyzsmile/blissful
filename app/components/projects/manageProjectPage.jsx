"use strict";

var React = require('react');
var Router = require('react-router');
var ProjectForm = require('./projectForm.jsx');
var ProjectActions = require('../../actions/ProjectActions.jsx');
var ProjectStore = require('../../stores/ProjectStore.jsx');
var toastr = require('toastr');

var ManageProjectPage = React.createClass({
    mixins: [
        Router.Navigation
    ],

    statics: {
        willTransitionFrom: function(transition, component) {
            if (component.state.dirty && !confirm('Leave without saving?')) {
                transition.abort();
            }
        }
    },

    getInitialState: function() {
        return {
            project: { id: '', firstName: '', lastName: '' },
            errors: {},
            dirty: false
        };
    },

    componentWillMount: function() {
        var projectId = this.props.params.id; //from the path '/project:id'
        if (projectId) {
            this.setState({project: ProjectStore.getProjectById(projectId) });
        }
    },

    setProjectState: function(event) {
        this.setState({dirty: true});
        var field = event.target.name;
        var value = event.target.value;
        this.state.project[field] = value;
        return this.setState({project: this.state.project});
    },

    projectFormIsValid: function() {
        var formIsValid = true;
        this.state.errors = {}; //clear any previous errors.

        if (this.state.project.firstName.length < 3) {
            this.state.errors.firstName = 'First name must be at least 3 characters.';
            formIsValid = false;
        }

        if (this.state.project.lastName.length < 3) {
            this.state.errors.lastName = 'Last name must be at least 3 characters.';
            formIsValid = false;
        }

        this.setState({errors: this.state.errors});
        return formIsValid;
    },

    saveProject: function(event) {
        event.preventDefault();

        if (!this.projectFormIsValid()) {
            return;
        }

        if (this.state.project._id) {
            ProjectActions.updateProject(this.state.project);
        } else {
            ProjectActions.createProject(this.state.project);
        }

        this.setState({dirty: false});
        toastr.success('Project saved.');
        this.transitionTo('projects');
    },

    render: function() {
        return (
            <ProjectForm
                project={this.state.project}
                onChange={this.setProjectState}
                onSave={this.saveProject}
                errors={this.state.errors} />
        );
    }
});

module.exports = ManageProjectPage;