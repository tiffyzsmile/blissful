"use strict";

var Dispatcher = require('../dispatcher/appDispatcher.jsx');
var ActionTypes = require('../constants/actionTypes.jsx');
var UserStore = require('../stores/UserStore.jsx');

var InitializeActions = {
	initApp: function() {
		Dispatcher.dispatch({
			actionType: ActionTypes.INITIALIZE,
			initialData: {
				authors: UserStore.getAllUsers()
			}
		});
	}
};

module.exports = InitializeActions;