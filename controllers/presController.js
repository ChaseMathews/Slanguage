// controller for presentation content
const db = require("../models");

// Defining method (find all elements) for the PresController
module.exports = {
  findAll: (req, res) => {
    console.log(req.originalUrl)
    db.Presentation
      .find(req.query)
      .then(dbModel => {
        // console.log(dbModel);
          res.json(dbModel)}) 
      .catch(err => res.status(422).json(err));
  }
};