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
    findById: function ({ params }, res) {
        db.User
            .findById(params.id)
            .then(dbUser => res.json(dbUser))
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