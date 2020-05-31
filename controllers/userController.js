const db = require("../models");
const bcrypt = require('bcryptjs');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

// Defining methods (CRUD) for the UserController
module.exports = {
    // user sign up
    create: ({ body }, res) => {
        const saltRounds = 10;
        bcrypt.genSalt(saltRounds, (err, salt) => {
            if (err) {
                throw err
            } else {
                bcrypt.hash(body.password, salt, (err, hash) => {
                    if (err) {
                        throw err
                    } else {
                        db.User.create({
                            username: body.username,
                            password: hash
                        })
                            .then(dbUser => {
                                res.status(201).json('Success!');
                                res.json(dbUser);
                            })
                            .catch(err => res.status(422).json({ err, message: "Username already exists." }));
                    }
                });
            }
        })
    },
    // user login
    findOne: function ({ body }, res) {
        db.User
            .findOne({
                username: body.username
            })
            .then(dbUser => {
                if (!dbUser) {
                    return res.json(user);
                } else {
                    bcrypt.compare(body.password, dbUser.password, (err, result) => {
                        if (result) {
                            res.json({
                                username: dbUser.username,
                                id: dbUser._id,
                                results: dbUser.results
                            });
                        } else {
                            res.status(401).json({ message: 'Incorrect password. Try again!' });
                        }
                    })
                }
            })
            .catch(err => {
                console.log(err);
                res.status(500).json(err.message);
            });
    },
    // findOne: passport.use(new LocalStrategy(
    //     function (username, password, done) {
    //         db.User
    //             .findOne({
    //                 username: username
    //             }),
    //             function (err, user) {
    //                 if (err) { return done(err); }
    //                 if (!user) {
    //                     return done(null, false, { message: 'Incorrect username.' });
    //                 }
    //                 if (!user.validPassword(password)) {
    //                     return done(null, false, { message: 'Incorrect password.' });
    //                 }
    //                 return done(null, user)
    //                 .then(dbUser => {
    //                     if (!dbUser) {
    //                         return res.json(user);
    //                     } else {
    //                         bcrypt.compare(body.password, dbUser.password, (err, result) => {
    //                             if (result) {
    //                                 res.json({
    //                                     username: dbUser.username,
    //                                     _id: dbUser._id,
    //                                     results: dbUser.results,
    //                                     currentLanguage: dbUser.currentLanguage
    //                                 });
    //                             } else {
    //                                 res.status(401).json({ message: 'Incorrect password. Try again!' });
    //                             }
    //                         })
    //                     }
    //                 })
    //                 .catch(err => {
    //                     console.log(err);
    //                     res.status(500).json(err.message);
    //                 })
    //             }
    //     })),
    getUser: function ({ params }, res) {
        console.log(params.id);
        db.User
            .findOne({ _id: params.id })
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    },
    // update user's current language or existing lesson score (language AND lesson they've already practiced)
    update: function ({ params, body }, res) {
        console.log(params.id, body);
        db.User
            .findOneAndUpdate({ _id: params.id }, body, { new: true })
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    },
    // update user results (new language not previously practiced)
    updateResults: function ({ params, body }, res) {
        console.log(params.userId, body);
        db.User
            .findOneAndUpdate({ _id: params.userId }, { $push: { results: body } }, { new: true })
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    },
    // update user results (language they've already practiced, new lesson)
    updateLesson: function ({ params, body }, res) {
        console.log("params.resultsId", params.resultsId, "body", body);
        db.User
            .findOneAndUpdate({ "results._id": params.resultsId }, { $push: { "results.$.lesson": body } }, { new: true })
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    },
    updateExistingLesson: function ({ params, body }, res) {
        console.log(params.userId, body);
        const updateStr = "results." + body.resultsIndex + ".lesson." + body.lessonIndex;
        db.User
            .findOneAndUpdate({ _id: params.userId }, { [updateStr]: body.resultObject }, { new: true })
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    },
    // delete user account
    remove: function ({ params }, res) {
        db.User
            .findById({ _id: params.id })
            .then(dbUser => dbUser.remove())
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    }
}