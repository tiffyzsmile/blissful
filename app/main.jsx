// set global paths to access path aliases from any module
paths           = require('./../paths.js')

var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router');
var routes = require('./routes');
var InitializeActions = require('./actions/initializeActions');

InitializeActions.initApp();


Router.run(routes, Router.HistoryLocation, function(Handler) {
    ReactDOM.render(<Handler/>, document.getElementById('app'));
});






console.log("Hello from JSX!");

// var ProjectItemList = require('./components/project-item/ProjectItemList.jsx');
// var UserList = require('./components/users/userList.jsx');
//
// var projectItemStore = require('./stores/ProjectItemStore.jsx');
// var userStore = require('./stores/UserStore.jsx');
//
// var initialProjects = projectItemStore.getItems();
// var initialUsers = userStore.getUsers();
// function render(){
//     ReactDOM.render(<ProjectItemList items={initialProjects}/>,app)
//     ReactDOM.render(<UserList users={initialUsers}/>,app)
// }
//
// projectItemStore.onChange(function(items){
//     initialProjects = items;
//     render();
// })
// render();