// controller for presentation content
const db = require("../models");

// Defining method (find all elements) for the PresController
module.exports = {
  findAllNumPresData: (req, res) => {
    // to deal with different languages
    console.log(req.headers.referer);
    db.NumPres
      .find({language: req.params.lang})
      .then(([dbModel]) => {
        console.log(dbModel.content);
        res.json(dbModel.content);
      })
      .catch(err => res.status(422).json(err));
  },
  findAllSlangPresData: (req, res) => {
    db.SlangPres
      .find({language: req.params.lang})
      .then(([dbModel]) => {
        res.json(dbModel.content)
      })
      .catch(err => res.status(422).json(err));
  }
};