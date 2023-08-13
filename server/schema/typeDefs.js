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
    description: String!
    picturePath: String!
    userPicturePath: String!
  likes: User!
  comments: [Comment]
  createdAt: Date!
}

type Comment {
  _id: ID!
  userId: User!
  postId: Post
  commentContent: [Comment]
  createdAt: String!
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
  createPost(userId: ID!, firstName: String!, lastName: String!, description: String!, picturePath: String!,createdAt: Date!): Post!
  createComment(userId: ID!, postId: ID!, commentContent: String!): Comment!
  login(email: String!, password: String!): AuthData!
  signup(firstName: String!, lastName: String!, email: String!, password: String!,location: String!, picturePath: String): AuthData!
  deletePost(postId: ID!): Post
  deleteUser(userId: ID!): User
  addFriend(userId: ID!, friendId: ID!): User
}
`;

module.exports = typeDefs;