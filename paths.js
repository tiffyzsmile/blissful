//This file defines aliases for require calls so requiring/managing files is less painful

var basePath = '/Users/tiffanylmay/Sites/blissful/blissful/';

//Path aliases
paths = {
    distFolder:             basePath + '.tmp',


    //Database
    database:               basePath + 'server/database/database.js',


    appRoutes:              basePath + 'app/routes.js',

    app:                    basePath + 'app/components/app.jsx',
    indexPage:              basePath + 'app/index.ejs',

    //USERS
    userActions:            basePath + 'app/actions/UserActions.jsx',
    userApiRoutes:          basePath + 'server/routes/api/users.js',
    userAppRoutes:          basePath + 'server/routes/app/users.js',
    userModel:              basePath + 'server/models/User.js',
    userForm:               basePath + 'app/components/users/userForm.jsx',
    userList:               basePath + 'app/components/users/userList.jsx',
    userPage:               basePath + 'app/components/users/userPage.jsx',
    userStore:              basePath + 'app/stores/UserStore.jsx',
    manageUserPage:         basePath + 'app/components/users/manageUserPage.jsx',

    //Projects
    projectActions:         basePath + 'app/actions/ProjectActions.jsx',
    projectApiRoutes:       basePath + 'server/routes/api/projects.js',
    projectAppRoutes:       basePath + 'server/routes/app/projects.js',
    projectModel:           basePath + 'server/models/Project.js',
    projectForm:            basePath + 'app/components/projects/projectForm.jsx',
    projectList:            basePath + 'app/components/projects/projectList.jsx',
    projectPage:            basePath + 'app/components/projects/projectPage.jsx',
    projectStore:           basePath + 'app/stores/ProjectStore.jsx',
    manageProjectPage:      basePath + 'app/components/projects/manageProjectPage.jsx',


    //HOME
    homeAppRoutes:          basePath + 'server/routes/app/home.js',
    homePage:               basePath + 'app/components/homePage.jsx'



}

module.exports = paths;