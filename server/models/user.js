const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

//name, username, email, password, location, bio, profilePicId, connectionList
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true,
      unique: true,
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
    location: {
        type: String,
        required: true,
    },
    bio: {
        type: String,
        required: true,
    },

    profilePicId: {
        type: String,
        required: true,
    },
    
    connectionList: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
    }],
  },
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