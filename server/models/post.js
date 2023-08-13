const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const dateFormat = require('../utils/dateFormat');

const postSchema = new Schema(
  {
    authorId: {
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

      location: String,
      postText: String,
      picturePath: String,
      postPicturePath: String,

      likes: {
        type: Map,
        of: Boolean,
      },

      comments: {
        type: [Schema.Types.ObjectId],
        ref: "Comment",
      },

      createdAt: {
        type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
      },

  },

  { timestamps: true }

);

module.exports = mongoose.model("Post", postSchema);