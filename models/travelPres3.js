const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const travelPres3Schema = new Schema(
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
  

const TravelPres3 = mongoose.model("TravelPres3", travelPres3Schema);

module.exports = TravelPres3;