var passport = require('passport'),
    FacebookStrategy = require('passport-facebook').Strategy;


module.exports = function () {
    passport.use(new FacebookStrategy({
            clientID: '1092280277502771',
            clientSecret: '70440bd4f38ed5fa01c8c808cb9cc2d6',
            callbackURL: 'http://localhost:3000/auth/facebook/callback',
            profileFields: ['email'],
            passReqToCallback: true
        },
        function (req, accessToken, refreshToken, profile, done) {
            if (req.user) {
                var query = {};
                if (req.user.google) {
                    console.log('google');
                    var query = {
                        'google.id': req.user.google.id
                    };
                } else if (req.user.twitter) {
                    var query = {
                        'twitter.id': req.user.twitter.id
                    };
                }
                User.findOne(query, function (error, user) {
                    console.log(error);
                    console.log('user');
                    if (user) {
                        user.facebook = {};
                        user.facebook.id = profile.id;
                        user.facebook.token = accessToken;

                        user.save();
                        done(null, user);
                    }
                })

            } else {
                var query = {
                    'facebook.id': profile.id
                };

                User.findOne(query, function (error, user) {
                    if (user) {
                        console.log('found');
                        done(null, user);
                    } else {
                        console.log('not found');
                        var user = new User;

                        user.email = profile.emails[0].value;
                        //user.image =
                        //    profile._json.profile_image_url;
                        user.displayName = profile.displayName;

                        user.facebook = {};
                        user.facebook.id = profile.id;
                        user.facebook.token = accessToken;

                        user.save();
                        done(null, user);
                    }
                })
            }
        }
    ));

}