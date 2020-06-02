const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const travelPres2Schema = new Schema(
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
  

const TravelPres2 = mongoose.model("TravelPres2", travelPres2Schema);

module.exports = TravelPres2;
