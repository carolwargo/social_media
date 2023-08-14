const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
  _id: ID!
  firstname: String!
  lastname: String!
  email: String!
  password: String!
  location: String
  picturePath: String
  friends: [User]
  viewProfile: String
  bio: String
  primaryPosition: String
  viewedProfile: String
  impressions: String
  createdAt: String!
  updatedAt: String!
}

type Post {
  _id: ID!
  userId: User!
  firstName: User!
  lastName: User!
  location: String!
  description: String!
  picturePath: String!
  userPicturePath: String!
  likes: User!
  comments: [Comment]
  createdAt: String!
  updatedAt: String!
}

type Comment {
  _id: ID!
  userId: User!
  postId: Post
  commentContent: String!
  authorName: String!
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
  createPost(userId: ID!, firstName: String!, lastName: String!, description: String!, picturePath: String!,createdAt: String!, updateAt: String!): Post!
  createComment(userId: ID!, postId: ID!,authorName: String!, commentContent: String!): Comment!
  login(email: String!, password: String!): AuthData!
  signup(firstName: String!, lastName: String!, email: String!, password: String!, location: String!, picturePath: String): AuthData!
  deletePost(postId: ID!): Post
  deleteUser(userId: ID!): User
  addFriend(userId: ID!, friendId: ID!): User
}
`;

module.exports = typeDefs;