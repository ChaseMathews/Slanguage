const db = require("../models");
const bcrypt = require('bcryptjs');

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
    findById: function ({ params }, res) {
        db.User
            .findById(params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    // will be used if user wants to update their username/password
    update: function ({ params, body }, res) {
        console.log(params.id, body);
        db.User
            .findOneAndUpdate({ _id: params.id }, body, { new: true })
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    },
    // // used for storing user progress data
    updateLesson: function ({ params, body }, res) {
        console.log(params.id, body);
        db.User
            .find( { _id: params.id }, { results: [ { _id: params.lessonId } ] } )
            // .update({$lesson: body})
            .then(dbUser => {
                console.log(dbUser);
                res.json(dbUser)
            })
            .catch(err => res.status(422).json(err));
    },

    updateResults: function ({ params, body }, res) {
        console.log(params.id, body);
        db.User
            .findOneAndUpdate({ _id: params.id }, { $push: { results: body } }, { new: true })
            .then(dbUser => {
                console.log(dbUser);
                res.json(dbUser)
            })
            .catch(err => res.status(422).json(err));
    },
    // will be used if user wants to delete their account
    remove: function ({ params }, res) {
        db.User
            .findById({ _id: params.id })
            .then(dbUser => dbUser.remove())
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    }
}