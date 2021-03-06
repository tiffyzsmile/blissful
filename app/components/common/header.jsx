"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({
    render: function() {
        return (
            <nav className="navbar navbar-default b-nav">
                <Link to="app" className="navbar-brand b-logo">Blissful</Link>
                <ul className="nav navbar-nav">
                    <li><Link to="app">Home</Link></li>
                    <li><Link to="users">Users</Link>
                        <ul>
                            <li>
                                <Link to="addProject">Projects</Link>
                                <ul>
                                    <li>
                                        <Link to="addUser">Add User</Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-dropdown"><Link to="projects">Projects</Link>
                        <ul>
                            <li>
                                <Link to="addProject">Add Project</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        );
    }
});

module.exports = Header;
