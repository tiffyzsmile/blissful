"use strict";

var Dispatcher = require('../dispatcher/appDispatcher.jsx');
var UserStore = require('../stores/UserStore.jsx');
var ActionTypes = require('../constants/actionTypes.jsx');

var UserActions = {
    createUser: function(user) {
        var newUser = UserStore.addUser(user);

        //Hey dispatcher, go tell all the stores that an user was just created.
        Dispatcher.dispatch({
            actionType: ActionTypes.CREATE_USER,
            user: newUser
        });
    },

    updateUser: function(user) {
        var updatedUser = UserStore.updateUser(user);

        Dispatcher.dispatch({
            actionType: ActionTypes.UPDATE_USER,
            user: updatedUser
        });
    },

    deleteUser: function(id) {
        UserStore.deleteUser(id);

        Dispatcher.dispatch({
            actionType: ActionTypes.DELETE_USER,
            id: id
        });
    }
};

module.exports = UserActions;