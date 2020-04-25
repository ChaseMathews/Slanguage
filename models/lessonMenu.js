const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const lessonMenuSchema = new Schema(
    {
        language: {
            type: String
        },
        title: {
            type: String
        },
        details: {
            iconUrl: {
                type: String,
            },
            imageUrl: {
                type: String
            },
            description: {
                type: String
            },
            completed: {
                type: Boolean
            }
        }
    })

const LessonMenu = mongoose.model("LessonMenu", lessonMenuSchema);

module.exports = LessonMenu;
