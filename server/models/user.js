const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

//name, username, email, password, location, bio, profilePicId, connectionList
const userSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },

    firstname: {
      type: String,
      required: true
    },

    lastname: {
        type: String,       
        required: true
    },

    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must match an email address!'],
    },

    password: {
      type: String,
      required: true,
      minlength: 4,
    },

    picturePath: {
        type: String,
        required: true,
    },

    friends: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
    }],

    location: {
      type: String,
      required: true,
    },

    bio: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },

    primaryPosition: {
      type: String,
      required: true,
    },

    viewedProfile: {
      type: String,
      required: true,
    },

    impressions: {
      type: String,
      required: true,
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
  }, 
    { timestamps: true }
);

//encrypting password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

//checking if password is correct
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('User', userSchema);