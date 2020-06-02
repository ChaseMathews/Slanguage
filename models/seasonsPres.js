const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const seasonsPresSchema = new Schema(
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
  

const SeasonsPres = mongoose.model("SeasonsPres", seasonsPresSchema);

module.exports = SeasonsPres;