var dispatcher = require('./../dispatcher.js');
var helper = require('./../helpers/restHelper.js');
var _ = require('lodash');

function UserStore(){
    var users = [];
    
    helper.get("api/users")
    .then(function(data){
        users = data;
        triggerListeners();
    })
    
    var listeners = [];
    
    function getAllUsers(){
        return users;
    }

    function getUserById(id) {
        return _.find(users, {_id: id});
    }
    
    function addUser(user) {
        users.push(user);
        triggerListeners();
        
        helper.post("/api/users",user);
    }

    function updateUser(user) {
        users.push(user);
        triggerListeners();

        helper.put("/api/users/"+user._id,user);
    }
    function deleteUser(user){
        var index;
        users.filter(function(_user, _index){
            if (_item.displayName == user.displayName) {
                index = _index;
            }
        });
        
        users.splice(index,1);
        triggerListeners();
        
        helper.del('/api/users/'+user._id);
    
    }

    
    function onChange(listener){
        listeners.push(listener);
    }
    
    function triggerListeners(){
		listeners.forEach(function(listener){
			listener(users)	;
		})
	};
    
    dispatcher.register(function(event){
        var split = event.type.split(':');
        if (split[0]==='user'){
            switch(split[1]){
                case "add":
                    addUser(event.payload);
                    break;
                case "delete":
                    deleteUser(event.payload);
                    break;
                case "buy":
                    setUserBought(event.payload,true);
                    break;
                case "unbuy":
                    setUserBought(event.payload,false);
                    break;
            }
        }
    });
    
    return {
        getAllUsers:getAllUsers,
        getUserById: getUserById,
        updateUser: updateUser,
        onChange:onChange
    }
    
    

}

module.exports = new UserStore();