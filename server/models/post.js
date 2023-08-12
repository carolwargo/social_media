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

    location: String,
    description: String,
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
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);