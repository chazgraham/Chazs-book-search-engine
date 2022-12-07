// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`

    type User {
        _id: ID
        username: String
        email: String
        books: [book]
    }

    type book {
        _id: ID
        authors: String
        description: String
        link: String
        title: String
        image: String
    }

    type Query {
        me: User
        users: [User]
        user(username: String!): User
        savedBooks: [book]
        book(_id: ID!): book
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addBook(bookId: ID!): User
    }

    type Auth {
        token: ID!
        user: User
    }
`;

// export the typeDefs
module.exports = typeDefs;