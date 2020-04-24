const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/languageapp"
);

// Presentation Seeds
const presentation = [
  {
    language: "Spanish",
    content: [
      {
        imageUrl: "",
        targetWord: "uno",
        audioToPlay: "",
        phonetic: ""
      },
      {
        imageUrl: "",
        targetWord: "dos",
        audioToPlay: "",
        phonetic: ""
      },
      {
        imageUrl: "",
        targetWord: "tres",
        audioToPlay: "",
        phonetic: ""
      },
      {
        imageUrl: "",
        targetWord: "cuatro",
        audioToPlay: "",
        phonetic: ""
      },
      {
        imageUrl: "",
        targetWord: "cinco",
        audioToPlay: "",
        phonetic: ""
      },
      {
        imageUrl: "",
        targetWord: "seis",
        audioToPlay: "",
        phonetic: ""
      },
      {
        imageUrl: "",
        targetWord: "siete",
        audioToPlay: "",
        phonetic: ""
      },
      {
        imageUrl: "",
        targetWord: "ocho",
        audioToPlay: "",
        phonetic: ""
      },
      {
        imageUrl: "",
        targetWord: "nueve",
        audioToPlay: "",
        phonetic: ""
      },
      {
        imageUrl: "",
        targetWord: "diez",
        audioToPlay: "",
        phonetic: ""
      }
    ]
  },
  {
    language: "Navajo",
    content: [
      {
        imageUrl: "",
        targetWord: "",
        audioToPlay: "",
        phonetic: ""
      },
      {
        imageUrl: "",
        targetWord: "",
        audioToPlay: "",
        phonetic: ""
      },
      {
        imageUrl: "",
        targetWord: "",
        audioToPlay: "",
        phonetic: ""
      },
      {
        imageUrl: "",
        targetWord: "",
        audioToPlay: "",
        phonetic: ""
      },
      {
        imageUrl: "",
        targetWord: "",
        audioToPlay: "",
        phonetic: ""
      },
      {
        imageUrl: "",
        targetWord: "",
        audioToPlay: "",
        phonetic: ""
      },
      {
        imageUrl: "",
        targetWord: "",
        audioToPlay: "",
        phonetic: ""
      },
      {
        imageUrl: "",
        targetWord: "",
        audioToPlay: "",
        phonetic: ""
      },
      {
        imageUrl: "",
        targetWord: "",
        audioToPlay: "",
        phonetic: ""
      },
      {
        imageUrl: "",
        targetWord: "",
        audioToPlay: "",
        phonetic: ""
      }
    ]
  }
]


// Insert Presentation Seeds
db.Presentation
  .remove({})
  .then(() => db.Presentation.collection.insertMany(presentation))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });



// Quiz Seeds  
const quizzes = [
  {
    language: "Spanish",
    questions: [
      {
        imageUrl: "",
        answerOptions: ["cuatro", "dos", "cinco"],
        correctAnswer: "dos",
        explanation: ""
      },
      {
        imageUrl: "",
        answerOptions: ["uno", "tres", "dos"],
        correctAnswer: "uno",
        explanation: ""
      },
      {
        imageUrl: "",
        answerOptions: ["cinco", "cuatro", "uno"],
        correctAnswer: "cuatro",
        explanation: ""
      },
      {
        imageUrl: "",
        answerOptions: ["dos", "cuatro", "tres"],
        correctAnswer: "tres",
        explanation: ""
      },
      {
        imageUrl: "",
        answerOptions: ["cinco", "tres", "uno"],
        correctAnswer: "cinco",
        explanation: ""
      },
      {
        imageUrl: "",
        answerOptions: ["nueve", "seis", "ocho"],
        correctAnswer: "ocho",
        explanation: ""
      },
      {
        imageUrl: "",
        answerOptions: ["seis", "diez", "siete"],
        correctAnswer: "seis",
        explanation: ""
      },
      {
        imageUrl: "",
        answerOptions: ["siete", "nueve", "diez"],
        correctAnswer: "diez",
        explanation: ""
      },
      {
        imageUrl: "",
        answerOptions: ["ocho", "siete", "seis"],
        correctAnswer: "siete",
        explanation: ""
      },
      {
        imageUrl: "",
        answerOptions: ["nueve", "ocho", "diez"],
        correctAnswer: "nueve",
        explanation: ""
      }
    ]
  },
  {
    language: "Navajo",
    questions: [
      {
        imageUrl: "",
        answerOptions: [],
        correctAnswer: "",
        explanation: ""
      },
      {
        imageUrl: "",
        answerOptions: [],
        correctAnswer: "",
        explanation: ""
      },
      {
        imageUrl: "",
        answerOptions: [],
        correctAnswer: "",
        explanation: ""
      },
      {
        imageUrl: "",
        answerOptions: [],
        correctAnswer: "",
        explanation: ""
      },
      {
        imageUrl: "",
        answerOptions: [],
        correctAnswer: "",
        explanation: ""
      },
      {
        imageUrl: "",
        answerOptions: [],
        correctAnswer: "",
        explanation: ""
      },
      {
        imageUrl: "",
        answerOptions: [],
        correctAnswer: "",
        explanation: ""
      },
      {
        imageUrl: "",
        answerOptions: [],
        correctAnswer: "",
        explanation: ""
      },
      {
        imageUrl: "",
        answerOptions: [],
        correctAnswer: "",
        explanation: ""
      },
      {
        imageUrl: "",
        answerOptions: [],
        correctAnswer: "",
        explanation: ""
      },
    ]
  }
]


// Insert Quiz Seeds
db.Quiz
  .remove({})
  .then(() => db.Quiz.collection.insertMany(quizzes))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });