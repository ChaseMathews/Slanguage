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
                                dbUser.password = undefined
                                res.json(dbUser)
                            })
                            .catch(err => res.status(422).json({ err, message: "Username already exists." }));
                    }
                });
            }
        })
    },
    getUser: function ({ params }, res) {
        console.log("params.id", params.id);
        db.User
            .findOne({ _id: params.id })
            .then(dbUser => {
                dbUser.password = undefined
                res.json(dbUser)
            })
            .catch(err => res.status(422).json(err));
    },
    // update user's current language or existing lesson score (language AND lesson they've already practiced)
    update: function ({ params, body }, res) {
        console.log(params.id, body);
        db.User
            .findOneAndUpdate({ _id: params.id }, body, { new: true })
            .then(dbUser => {
                dbUser.password = undefined
                res.json(dbUser)
            })
            .catch(err => res.status(422).json(err));
    },
    // update user results (new language not previously practiced)
    updateResults: function ({ params, body }, res) {
        console.log(params.userId, body);
        db.User
            .findOneAndUpdate({ _id: params.userId }, { $push: { results: body } }, { new: true })
            .then(dbUser => {
                dbUser.password = undefined
                res.json(dbUser)
            })
            .catch(err => res.status(422).json(err));
    },
    // update user results (language they've already practiced, new lesson)
    updateLesson: function ({ params, body }, res) {
        console.log("params.resultsId", params.resultsId, "body", body);
        db.User
            .findOneAndUpdate({ "results._id": params.resultsId }, { $push: { "results.$.lesson": body } }, { new: true })
            .then(dbUser => {
                dbUser.password = undefined
                res.json(dbUser)
            })
            .catch(err => res.status(422).json(err));
    },
    updateExistingLesson: function ({ params, body }, res) {
        console.log(params.userId, body);
        const updateStr = "results." + body.resultsIndex + ".lesson." + body.lessonIndex;
        db.User
            .findOneAndUpdate({ _id: params.userId }, { [updateStr]: body.resultObject }, { new: true })
            .then(dbUser => {
                dbUser.password = undefined
                res.json(dbUser)
            })
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