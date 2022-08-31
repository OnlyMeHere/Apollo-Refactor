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
  mutation addUser($username: String!, $email: String!) {
    addUser(username: $username) {
      token
      email
      
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($bookId: bookId!) {
    saveBook(bookId: $bookId) {
      author
      description
      title
      image
      link
      user

    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: bookId!) {
    removeBook(bookId: $bookId) {
      
    }
  }`;

