import { gql } from '@apollo/client';

export const GET_POST = gql`
  query GetPost($postId: ID!) {
    getPost(postId: $postId) {
       
      _id
      firstName
      lastName
      postText
      picturePath
      postPicturePath
      userId {
        _id
        username
      }
      comments {
        _id
        content
        userId {
          _id
          username
        }
        createdAt {
            formatted
        }
      }
    }
  }
`;

export const USER_POSTS = gql`
  query UserPosts($userId: ID!) {
    userPosts(userId: $userId) {
      _id
      userId {
        _id
      }
      firstName
      lastName
      postText
      picturePath
      postPicturePath
      comments {
        _id
      }
     createdAt
    }
  }
`;

export const GET_ALL_POSTS = gql`
  query GetAllPosts {
    getAllPosts {
      _id
      firstName
        lastName
        postText
        picturePath
        postPicturePath
      userId {
        _id
      }
      createdAt
      comments {
        _id
      }
    }
  }
`;


export const YOUR_PROFILE = gql`
  query GetUser($userId: ID!) {
    getUser(userId: $userId) {
      _id
      firstName
        lastName
      email
      picturePath
      friends {
        _id
      }
    }
  }
`;


export const User_Profile = gql`
query GetUser($userId: ID!) {
    getUser(userId: $userId) {
      _id
      picturePath
      firstName
        lastName
      email
      fri {
        _id
      }
    }
  }
`;

export const GET_FRIENDS = gql`
  query GetFriends($userId: ID!) {
    userFriends(userId: $userId) {
      _id
      firstName
        lastName
        picturePath
    }
  }
`;