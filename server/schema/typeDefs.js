const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
  _id: ID!
  firstname: String!
  lastname: String!
  email: String!
  password: String!
  picturePath: String!
  friends: [User]
      location: String!
      viewedProfile: String!
      impressions: String!
}

type Post {
  _id: ID!
  userId: User!
  firstName: User!
  lastName: User!
  caption: String!
      location: String!
      picturePath: String!
      userPicturePath: String!
  likes: User!
  comments: [Comment]
  createdAt: String!
}

type Comment {
  _id: ID!
  userId: User!
  postId: Post
  commentText: String!
  authorName: String!
  createdAt: String!
}

type AuthData {
  token: ID!
  profile: User!
}

type Query {
  getUser(userId: ID!): User
  getAllUsers: [User]
  getPost(postId: ID!): Post
  getAllPosts: [Post]
  userPosts(userId: ID!): [Post]
  userFriends(userId: ID!): [User]
  getComment(commentId: ID!): Comment
}

type Mutation {
  createPost(userId: ID!, firstName: String!, lastName: String!, caption: String!, picturePath: String! createdAt: String!): Post!
  createComment(userId: ID!, postId: ID!, authorName: String!, commentText: String!, createdAt: String!): Comment!
  login(email: String!, password: String!): AuthData!
  signup(firstName: String!, lastName: String!, email: String!, password: String!, location: String!, picturePath: String): AuthData!
  deletePost(postId: ID!): Post
  deleteUser(userId: ID!): User
  addFriend(userId: ID!, friendId: ID!): User
}
`;

module.exports = typeDefs;