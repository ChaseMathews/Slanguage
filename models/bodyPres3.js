const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bodyPres3Schema = new Schema(
    {
      language: {
        type: String
      },
      content: {
        imageUrl: {
          type: String
        },
        targetWord: {
          type: String
        },
        audioToPlay: {
          type: String
        },
        explanation: {
          type: String
        }
      }
    }
  )
  

const BodyPres3 = mongoose.model("BodyPres3", bodyPres3Schema);

module.exports = BodyPres3;