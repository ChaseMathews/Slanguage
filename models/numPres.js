const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const numPresSchema = new Schema(
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
      phonetic: {
        type: String
      }
    }
  }
)

const NumPres = mongoose.model("NumPres", numPresSchema);

module.exports = NumPres;
