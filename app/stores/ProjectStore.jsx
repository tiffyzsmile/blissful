var dispatcher = require('./../dispatcher.js');
var helper = require('./../helpers/restHelper.js');
var _ = require('lodash');

function ProjectStore(){
    var projects = [];
    
    helper.get("api/projects")
    .then(function(data){
        projects = data;
        triggerListeners();
    })
    
    var listeners = [];
    
    function getAllProjects(){
        return projects;
    }

    function getProjectById(id) {
        return _.find(projects, {_id: id});
    }
    
    function addProject(project) {
        projects.push(project);
        triggerListeners();
        
        helper.post("api/projects",project);
    }
    
    function deleteProject(project){
        var index;
        projects.filter(function(_project, _index){
            if (_item.displayName == project.displayName) {
                index = _index;
            }
        });
        
        projects.splice(index,1);
        triggerListeners();
        
        helper.del('api/projects/'+project._id);
    
    }
    
    function setProjectBought(project, isBought){
        var _project = projects.filter(function(a){ return a.displayName == project.displayName})[0];
        project.purchased = isBought || false;
        triggerListeners();
        
        helper.patch('api/projects/'+project._id,project);
    }
    
    function onChange(listener){
        listeners.push(listener);
    }
    
    function triggerListeners(){
		listeners.forEach(function(listener){
			listener(projects)	;
		})
	};
    
    dispatcher.register(function(event){
        var split = event.type.split(':');
        if (split[0]==='project'){
            switch(split[1]){
                case "add":
                    addProject(event.payload);
                    break;
                case "delete":
                    deleteProject(event.payload);
                    break;
                case "buy":
                    setProjectBought(event.payload,true);
                    break;
                case "unbuy":
                    setProjectBought(event.payload,false);
                    break;
            }
        }
    });
    
    return {
        getAllProjects:getAllProjects,
        getProjectById: getProjectById,
        onChange:onChange
    }
    
    

}

module.exports = new ProjectStore();