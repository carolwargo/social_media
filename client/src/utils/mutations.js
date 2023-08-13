import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        username
      }
    }
  }
`;

export const SIGNUP_USER = gql`
  mutation signup($firstName: String!, $lastName: String!, $email: String!, $password: String!, $picturePath: String!) {
    signup(firstName: $firstName, lastName: $lastName, email: $email, password: $password, picturePathId: $picturePathId) {
      token
      profile {
        _id
        firstName
        lastName
        email
       picturePathId
      }
    }
  }
`;

export const CREATE_POST = gql`
mutation createPost($userId: ID!, $title: String!, $postPicturePath: String!, $postText: String!) {
  createPost(userId: $userId, title: $title, postPicturePath: $postPicturePath, postText: $postText) {
    _id
    userId {
      _id
    }
    title
    postText
    postPicturePath
    createdAt
  }
}`;


export const ADD_FRIEND = gql`
  mutation AddFriend($userId: ID!, $friendId: ID!) {
    addFriend(
      userId: $userId
      friendId: $friendId
    ) {
      _id
      friends {
        _id
      }
    }
  }
`;