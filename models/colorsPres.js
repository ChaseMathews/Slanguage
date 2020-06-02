const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const colorsPresSchema = new Schema(
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
  

const ColorsPres = mongoose.model("ColorsPres", colorsPresSchema);

module.exports = ColorsPres;