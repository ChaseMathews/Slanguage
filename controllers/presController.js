// controller for presentation content
const db = require("../models");

// Defining method (find all elements) for the PresController
module.exports = {
  findAllNumPresData: (req, res) => {
    db.NumPres
      .find({})
      .then(dbModel => {
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  },
  findAllSlangPresData: (req, res) => {
    db.SlangPres
      .find({})
      .then(dbModel => {
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  }
};