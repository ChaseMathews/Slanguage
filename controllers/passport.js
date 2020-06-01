const db = require("../models");
const bcrypt = require('bcryptjs');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
    function (username, password, done) {
        db.User
            .findOne({
                username: username
            })
            .then(dbUser => {
                if (!dbUser) {
                    return done(null, false, dbUser);
                } else {
                    bcrypt.compare(password, dbUser.password, (err, result) => {
                        if (result) {
                            done(null, {
                                username: dbUser.username,
                                _id: dbUser._id,
                                id: dbUser._id,
                                results: dbUser.results,
                                currentLanguage: dbUser.currentLanguage
                            });
                        } else {
                            done(null, false, { message: 'Incorrect password. Try again!' });
                        }
                    })
                }
            })
            .catch(err => {
                console.log(err);
                done(err.message);
            })
    }
))

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    db.User.findById(id, function (err, user) {
        done(err, user);
    });
});

module.exports = passport;