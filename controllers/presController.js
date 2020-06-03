// controller for presentation content
const db = require("../models");

// Defining method (find all elements) for the PresController
module.exports = {
  findAllNumPresData: (req, res) => {
    db.NumPres
      .find({language: req.params.lang})
      .then(([dbModel]) => {
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
  },
  findAllBodyPres1Data: (req, res) => {
    db.BodyPres1
      .find({language: req.params.lang})
      .then(([dbModel]) => {
        res.json(dbModel.content)
      })
      .catch(err => res.status(422).json(err));
  },
  findAllBodyPres2Data: (req, res) => {
    db.BodyPres2
      .find({language: req.params.lang})
      .then(([dbModel]) => {
        res.json(dbModel.content)
      })
      .catch(err => res.status(422).json(err));
  },
  findAllBodyPres3Data: (req, res) => {
    db.BodyPres3
      .find({language: req.params.lang})
      .then(([dbModel]) => {
        res.json(dbModel.content)
      })
      .catch(err => res.status(422).json(err));
  },
  findAllBodyPres4Data: (req, res) => {
    db.BodyPres4
      .find({language: req.params.lang})
      .then(([dbModel]) => {
        res.json(dbModel.content)
      })
      .catch(err => res.status(422).json(err));
  },
  findAllCalendarPresData: (req, res) => {
    db.CalendarPres
      .find({language: req.params.lang})
      .then(([dbModel]) => {
        res.json(dbModel.content)
      })
      .catch(err => res.status(422).json(err));
  },
  findAllColorsPresData: (req, res) => {
    db.ColorsPres
      .find({language: req.params.lang})
      .then(([dbModel]) => {
        res.json(dbModel.content)
      })
      .catch(err => res.status(422).json(err));
  },
  findAllDaysPresData: (req, res) => {
    db.DaysPres
      .find({language: req.params.lang})
      .then(([dbModel]) => {
        res.json(dbModel.content)
      })
      .catch(err => res.status(422).json(err));
  },
  findAllProfanityPresData: (req, res) => {
    db.ProfanityPres
      .find({language: req.params.lang})
      .then(([dbModel]) => {
        res.json(dbModel.content)
      })
      .catch(err => res.status(422).json(err));
  },
  findAllSeasonsPresData: (req, res) => {
    db.SeasonsPres
      .find({language: req.params.lang})
      .then(([dbModel]) => {
        res.json(dbModel.content)
      })
      .catch(err => res.status(422).json(err));
  },
  findAllTravelPres1Data: (req, res) => {
    db.TravelPres1
      .find({language: req.params.lang})
      .then(([dbModel]) => {
        res.json(dbModel.content)
      })
      .catch(err => res.status(422).json(err));
  },
  findAllTravelPres2Data: (req, res) => {
    db.TravelPres2
      .find({language: req.params.lang})
      .then(([dbModel]) => {
        res.json(dbModel.content)
      })
      .catch(err => res.status(422).json(err));
  },
  findAllTravelPres3Data: (req, res) => {
    db.TravelPres3
      .find({language: req.params.lang})
      .then(([dbModel]) => {
        res.json(dbModel.content)
      })
      .catch(err => res.status(422).json(err));
  }
};