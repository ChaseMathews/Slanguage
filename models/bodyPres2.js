const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bodyPres2Schema = new Schema(
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
  

const BodyPres2 = mongoose.model("BodyPres2", bodyPres2Schema);

module.exports = BodyPres2;