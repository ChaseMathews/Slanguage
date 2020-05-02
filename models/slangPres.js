const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const slangPresSchema = new Schema(
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
  

const SlangPres = mongoose.model("SlangPres", slangPresSchema);

module.exports = SlangPres;