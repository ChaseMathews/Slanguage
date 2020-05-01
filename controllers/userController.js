const db = require("../models");

// Defining methods (CRUD) for the UserController
module.exports = {
    // will be used for signing up
    create: ({ body }, res) => {
        db.User.create(body)
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    },
    // will be used for logging in
    findOne: function ({ body }, res) {
        db.User
            .findOne({
                username: body.username
            })
            .then(dbUser => {
                console.log(dbUser);
                if (dbUser.password === body.password) {
                    res.json({
                        username: dbUser.username,
                        id: dbUser._id
                    })
                } else {
                    return res.status(401).json({ message: 'Incorrect password. Try again!' });
                }
            })
            .catch(err => {
                console.log(err);
                res.status(500).json(err.message);
            });
    },
    findById: function ({params}, res) {
        db.User
            .findById(params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    // will be used if user wants to update their username/password
    update: function ({ params, body }, res) {
        db.User
            .findOneAndUpdate({ _id: params.id }, body)
            .then(dbUser => res.json(dbUser))
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