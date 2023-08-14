const { AuthenticationError } = require("apollo-server-express");
const { User, Post, Comment } = require("../models");
const { signToken } = require("../utils/auth");
const { text } = require("express");

const resolvers = {
  Query: {

    // Get single User profile
    getUser: async (parent, { userId }) => {
      return await User.findOne({ _id: userId });
    },
    getAllUsers: async () => {
      return await User.find();
    },

    // Get all posts from all user
    getAllPosts: async () => {
      return await Post.find();
    },

    // Get single post from single user
    getPost: async (parent, { postId }) => {
      return await Post.findOne({ _id: postId });
    },

    // Get all posts from a single user
    userPosts: async (parent, { userId }) => {
      return await Post.find({ userId: userId });
    },

    // Get all friends of a single user
    userFriends: async (parent, { userId }) => {
      const user = await User.findOne({ _id: userId }).populate("friends");
      return user.friends;
    },

    // Get comments for a single post
    getComment: async (parent, { commentId }) => {
      return await Comment.findOne({ _id: commentId });
    },
  },

  Mutation: {
    signup: async (
      parent,
      { firstname, lastname, email, password, location, picturePath }
    ) => {
      const profile = await User.create({
       
        firstname,
        lastname,
        email,
        password,
        location,
        picturePath
      });
      const token = signToken(profile);
    
      return { token, profile };
    },

    login: async (parent, { email, password }) => {
      const profile = await User.findOne({ email });

      if (!profile) {
        throw new AuthenticationError("No profile with this email found!");
      }

      const correctPw = await profile.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(profile);
      return { token, profile };
    },
    
    addFriend: async (parent, { userId, friendId }, context) => {
      if (context.user && context.user._id === userId) {
        const user = await User.findOne({ _id: userId });
  
        if (!user.friends.includes(friendId)) {
          user.friends.push(friendId);
          await user.save();
        }
  
        return user;
      }
  
      throw new AuthenticationError('You need to be logged in!');
    },
    
    // CREATE POST
    createPost: async (parent, {  caption: picturePath, postPicturePath, likes, comments, createdAt }, context) => {
      if (context.user) {
        //variables
          const newPost = await Post.create({
            userId: context.user._id,
            firstName,
            lastName,
            caption,
            picturePath,
            postPicturePath,
            createdAt
          });
  
          await User.findOneAndUpdate(
              { _id: context.user._id },
              { $addToSet: { posts: newPost._id } }
          );
  
          return newPost;
      }
  
      throw new AuthenticationError('You need to be logged in!');
    },
    

    deletePost: async (parent, { postId }) => {
      // Logic to delete a post by postId
      const deletedPost = await Post.findByIdAndDelete(postId);
      return deletedPost;
    },

    deleteUser: async (parent, { userId }) => {
      // Logic to delete a user by userId
      const deletedUser = await User.findByIdAndDelete(userId);
      return deletedUser;
    },
  },
};

module.exports = resolvers;