const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
  _id: ID!
  firstname: String!
  lastname: String!
  email: String!
  password: String!
    location: String
    primaryPosition: String
    viewedProfile: String
    impressions: String
  picturePath: String
  friendList: [User]
}

type Post {
  _id: ID!
  authorId: User!
  firstName: User!
  lastName: User!
    location: String!
    postText: String!
    picturePath: String!
    postPicturePath: String!
  likes: User!
  comments: [Comment]
  createdAt: String!
}

type Comment {
  _id: ID!
  userId: User!
  postId: Post
  commentContent: String!
}

type AuthData {
  token: ID!
  profile: User!
}

type Query {
  getUser(userId: ID!): User
  getPost(postId: ID!): Post
  getAllPosts: [Post]
  userPosts(userId: ID!): [Post]
  userFriends(userId: ID!): [User]
  getComment(commentId: ID!): Comment
}

type Mutation {
  createPost(authorId: ID!, firstName: String!, lastName: String!, postText: String!, picturePath: String!,createdAt: String!): Post!
  createComment(authorId: ID!, postId: ID!, commentContent: String!): Comment!
  login(email: String!, password: String!): AuthData!
  signup(firstName: String!, lastName: String!, email: String!, password: String!, location: String!, picturePath: String): AuthData!
  deletePost(postId: ID!): Post
  deleteUser(userId: ID!): User
  addFriend(userId: ID!, friendId: ID!): User
}
`;

module.exports = typeDefs;