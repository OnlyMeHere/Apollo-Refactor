const { gql } = require('apollo-server-express');

const typeDef = gql`

    type Book {
        bookId: ID
        authors: String
        description: String
        title: String
        image: String
        link: String
    }

    type Auth {
        token:
        user: [User]
    }

    type User {
        _id: ID!
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }
    
    type Query {
        books: [Books]!
        me: [User]
    }
    `