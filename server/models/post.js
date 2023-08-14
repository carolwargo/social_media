const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const dateFormat = require('../utils/dateFormat');

const postSchema = new Schema(
  {
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },

      firstName: {
        type: String,
        required: true,
      },
      
      lastName: {
        type: String,
        required: true,
      },

      location: {
        type: String,
        required: true,
      },

      description: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
        },

      picturePath: String,
      userPicturePath: String,

      likes: {
        type: Map,
        of: Boolean,
      },

      comment: {
        type: [Schema.Types.ObjectId],
        ref: "Comment",
      },

      createdAt: {
        type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
      },

      updatedAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
     },
     createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    }
  },
  { timestamps: true }

);

module.exports = mongoose.model("Post", postSchema);