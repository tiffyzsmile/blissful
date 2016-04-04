var express = require('express');        // call express
var router = express.Router();          // call the packages we need


var Project = require(paths.projectModel); // pull in our project model

// on routes that end in /projects
// ----------------------------------------------------
router.route('/projects')

    // create a project (accessed at POST http://localhost:8080/api/projects)
    .post(function(req, res) {

        var project = new Project();      // create a new instance of the Project model
        project.displayName = req.body.displayName;  // set the projects name (comes from the request)

        // save the project and check for errors
        project.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Project created!' });
        });

    })

    // get all the projects (accessed at GET http://localhost:8080/api/projects)
    .get(function(req, res) {
        Project.find(function(err, projects) {
            if (err)
                res.send(err);

            res.json(projects);
        });
    });


// on routes that end in /projects/:project_id
// ----------------------------------------------------
router.route('/projects/:project_id')

    // get the project with that id (accessed at GET http://localhost:8080/api/projects/:project_id)
    .get(function(req, res) {
        Project.findById(req.params.project_id, function(err, project) {
            if (err)
                res.send(err);
            res.json(project);
        });
    })


    // update the project with this id (accessed at PUT http://localhost:8080/api/projects/:project_id)
    .put(function(req, res) {

        // use our project model to find the project we want
        Project.findById(req.params.project_id, function(err, project) {

            if (err)
                res.send(err);

            project.displayName = req.body.displayName;  // update the projects info

            // save the project
            project.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Project updated!' });
            });

        });
    })

    // delete the project with this id (accessed at DELETE http://localhost:8080/api/projects/:project_id)
    .delete(function(req, res) {
        Project.remove({
            _id: req.params.project_id
        }, function(err, project) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });

module.exports = router;   //export routes back to main.js