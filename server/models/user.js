const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

//name, username, email, password, location, bio, profilePicId, connectionList
const userSchema = new Schema(
  {
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

    friendList: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
    }],

    //DOCUMENTING PURPOSES ONLY. DO NOT INCLUDE as properties in typeDefs.js 
    location: String,
    primaryPosition: String,
    viewedProfile: String,
    impressions: String,
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