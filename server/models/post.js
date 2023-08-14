const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const dateFormat = require('../utils/dateFormat');

const postSchema = new Schema(
  {
    userId: {
      type: String,
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
    location: String,
    bio: String,
    picturePath: String,
    userPicturePath: String,
    likes: {
      type: Map,
      of: Boolean,
    },
    comments: {
      type: Array,
      default: [],
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