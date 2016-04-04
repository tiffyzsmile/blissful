var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var UserActions = require('../../actions/UserActions.jsx');
var toastr = require('toastr');

var UserList = React.createClass({
	propTypes: {
		users: React.PropTypes.array.isRequired
	},

	deleteUser: function(id, event) {
		event.preventDefault();
		UserActions.deleteUser(id);
		toastr.success('User Deleted');
	},

	render: function() {
		var createUserRow = function(user) {
			return (
				<tr key={user._id}>
					<td><a href="#" onClick={this.deleteUser.bind(this, user._id)}>Delete</a></td>
					<td><Link to="manageUser" params={{id: user._id}}>{user._id}</Link></td>
					<td>{user.displayName}</td>
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
					
						{this.props.users.map(createUserRow, this)}
					</tbody>
				</table>
			</div>
		);
	}
});

module.exports = UserList;