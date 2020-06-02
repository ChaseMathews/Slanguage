const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const travelPres1Schema = new Schema(
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
  

const TravelPres1 = mongoose.model("TravelPres1", travelPres1Schema);

module.exports = TravelPres1;