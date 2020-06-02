const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profanityPresSchema = new Schema(
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
  

const ProfanityPres = mongoose.model("ProfanityPres", profanityPresSchema);

module.exports = ProfanityPres;