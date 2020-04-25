const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const presentationSchema = new Schema(
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

const Presentation = mongoose.model("Presentation", presentationSchema);

module.exports = Presentation;
