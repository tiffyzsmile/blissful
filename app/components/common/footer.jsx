"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Footer = React.createClass({
    render: function() {
        return (
            <footer className="page-footer">
                <div className="container">
                    <div className="row">
                        <div className="col l6 s12">
                            <h5 className="white-text">Footer Content</h5>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container"> &copy; 2016 - Tiffany May. All rights reserved.</div>
                </div>
            </footer>

        );
    }
});

module.exports = Footer;
