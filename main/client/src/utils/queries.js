import { gql } from '@apollo/client';

export const QUERY_BOOKS = gql`
  query allBooks {
    books {
      _id
      name
      author
    }
  }
`;

export const QUERY_BOOK = gql`
  query Book {
    book {
      _id
      name
      author
    }
  }
`;
