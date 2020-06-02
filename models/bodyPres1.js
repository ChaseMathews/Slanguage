const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bodyPres1Schema = new Schema(
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
  

const BodyPres1 = mongoose.model("BodyPres1", bodyPres1Schema);

module.exports = BodyPres1;