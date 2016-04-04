var express = require('express');        // call express
var router = express.Router();          // call the packages we need


var User = require(paths.userModel); // pull in our user model

// on routes that end in /users
// ----------------------------------------------------
router.route('/users')

    // create a user (accessed at POST http://localhost:8080/api/users)
    .post(function(req, res) {

        var user = new User();      // create a new instance of the User model
        user.displayName = req.body.displayName;  // set the users name (comes from the request)

        // save the user and check for errors
        user.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'User created!' });
        });

    })

    // get all the users (accessed at GET http://localhost:8080/api/users)
    .get(function(req, res) {
        User.find(function(err, users) {
            if (err)
                res.send(err);

            res.json(users);
        });
    });


// on routes that end in /users/:user_id
// ----------------------------------------------------
router.route('/users/:user_id')

    // get the user with that id (accessed at GET http://localhost:8080/api/users/:user_id)
    .get(function(req, res) {
        User.findById(req.params.user_id, function(err, user) {
            if (err)
                res.send(err);
            res.json(user);
        });
    })


    // update the user with this id (accessed at PUT http://localhost:8080/api/users/:user_id)
    .put(function(req, res) {

        // use our user model to find the user we want
        User.findById(req.params.user_id, function(err, user) {

            if (err)
                res.send(err);

            user.displayName = req.body.displayName;  // update the users info
            user.firstName = req.body.firstName;  // update the users info
            user.lastName = req.body.lastName;  // update the users info

            // save the user
            user.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'User updated!' });
            });

        });
    })

    // delete the user with this id (accessed at DELETE http://localhost:8080/api/users/:user_id)
    .delete(function(req, res) {
        User.remove({
            _id: req.params.user_id
        }, function(err, user) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });


//
// var facebook = require('../services/facebook')('1092280277502771', '70440bd4f38ed5fa01c8c808cb9cc2d6');
// var twitter = require('../services/twitter')('ctW9g2INva3iEuHaeE5ptmVRg', 'MCwV5F99ZNSUc3lBNhpFH1N58QrHEQ9O04Ni7noO2gOktBeuwt');
//
//
// //middlewear to check if logged in before accessing route
// router.use('/', function (req, res, next) {
//     if (!req.user) {
//         res.redirect('/');
//     }
//     next();
// })
// /* GET users listing. */
//
// router.use('/', function(req,res,next){
//     // if(req.user.twitter)
//     // {
//     //     twitter.getTimeline(req.user.twitter.token,
//     //         req.user.twitter.tokenSecret,
//     //         req.user.twitter.id,
//     //         function(results){
//     //             req.user.twitter.lastPost = results[0].text;
//     //             next();
//     //         })
//     // }
// })
// router.get('/', function (req, res) {
//         console.log(req.user);
//         if (req.user.facebook) {
//             console.log('if facebook');
//             facebook.getImage(req.user.facebook.token,
//                 function (imageUrl) {
//                     console.log('got data');
//                     console.log(imageUrl);
//                     req.user.facebook.image = imageUrl;
//                     facebook.getFriends(req.user.facebook.token,
//                         function (results) {
//
//                             console.log(results);
//                             req.user.friends = results.total_count;
//                             res.render('users', {
//                                 user: req.user
//                             });
//                         }
//                     )
//                 });
//         } else {
//             res.render('users', {
//                 user: req.user
//             });
//         }
//
//     }
// );
//
//
module.exports = router;   //export routes back to main.js