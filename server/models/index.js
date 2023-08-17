const mongoose = require('mongoose');

// Models
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// Initialize all models
const initModels = () => {
    mongoose.model('User', User);
    mongoose.model('Post', Post);
    mongoose.model('Comment', Comment);
};

module.exports = {
    initModels,
    User,
    Post,
    Comment
};