const mongoose = require("mongoose");
const db = require("../models");
const quizSeeds = require("./quizSeeds.js");
const presSeeds = require("./presSeeds.js");

console.log(presSeeds[0]);
console.log(presSeeds[2]);

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/languageapp"
);

// PRESENTATIONS

// Insert Number Presentation Seeds
db.NumPres
  .remove({})
  .then(() => db.NumPres.collection.insertMany(presSeeds[0]))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

// Insert Slang Presentation Seeds
db.SlangPres
  .remove({})
  .then(() => db.SlangPres.collection.insertMany(presSeeds[1]))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.ProfanityPres
  .remove({})
  .then(() => db.ProfanityPres.collection.insertMany(presSeeds[2]))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.BodyPres1
  .remove({})
  .then(() => db.BodyPres1.collection.insertMany(presSeeds[3]))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.BodyPres2
  .remove({})
  .then(() => db.BodyPres2.collection.insertMany(presSeeds[4]))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.BodyPres3
  .remove({})
  .then(() => db.BodyPres3.collection.insertMany(presSeeds[5]))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.BodyPres4
  .remove({})
  .then(() => db.BodyPres4.collection.insertMany(presSeeds[6]))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.DaysPres
  .remove({})
  .then(() => db.DaysPres.collection.insertMany(presSeeds[7]))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.ColorsPres
  .remove({})
  .then(() => db.ColorsPres.collection.insertMany(presSeeds[8]))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.CalendarPres
  .remove({})
  .then(() => db.CalendarPres.collection.insertMany(presSeeds[9]))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.SeasonsPres
  .remove({})
  .then(() => db.SeasonsPres.collection.insertMany(presSeeds[10]))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.TravelPres1
  .remove({})
  .then(() => db.TravelPres1.collection.insertMany(presSeeds[11]))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.TravelPres2
  .remove({})
  .then(() => db.TravelPres2.collection.insertMany(presSeeds[12]))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.TravelPres3
  .remove({})
  .then(() => db.TravelPres3.collection.insertMany(presSeeds[13]))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });




//QUIZZES

// Insert Numbers Quiz Seeds
db.NumQuiz
  .remove({})
  .then(() => db.NumQuiz.collection.insertMany(quizSeeds[0]))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

// Insert Slang Quiz Seeds
db.SlangQuiz
  .remove({})
  .then(() => db.SlangQuiz.collection.insertMany(quizSeeds[1]))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.ProfanityQuiz
  .remove({})
  .then(() => db.ProfanityQuiz.collection.insertMany(quizSeeds[2]))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.BodyQuiz1
  .remove({})
  .then(() => db.BodyQuiz1.collection.insertMany(quizSeeds[3]))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
