var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var User = require('../../models/User');

module.exports = function () {
    passport.use(new GoogleStrategy({
            clientID: '1025569175192-7uockgn52f42s1brlh5le2nsqnk5g9k4.apps.googleusercontent.com',
            clientSecret: 'AnYS6EA4gMXxTiPUANxIOlos',
            callbackURL: 'http://localhost:3000/auth/google/callback'
        },
        function (req, accessToken, refreshToken, profile, done) {
            var query = {
                'google.id': profile.id
            };

            User.findOne(query, function (error, user) {
                if (user) {
                    console.log('found');
                    done(null, user);
                } else {
                    console.log('not found');
                    var user = new User;

                    user.email = profile.emails[0].value;
                    user.image =
                        profile._json.profile_image_url;
                    user.displayName = profile.displayName;

                    user.google = {};
                    user.google.id = profile.id;
                    user.google.token = accessToken;
                    user.save();
                    done(null, user);
                }
            })
        }
    ));


};