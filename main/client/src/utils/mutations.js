import { gql } from '@apollo/client';

export const ADD_BOOK = gql`
  mutation addBook($name: String!) {
    addBook(name: $name) {
      _id
      name
    }
  }
`;

export const DELETE_BOOK = gql`
  mutation deleteBook($name: String!) {
    deleteBook(name: $name) {
      _id
      name
    }
  }
`;

export const LOGIN_USER = gql`
  mutation loginUser($username: String!, $email: String!) {
    loginUser(username: $username) {
      token
      email

    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!) {
    addUser(username: $username) {
      token
      email
      
    }
  }
`;

