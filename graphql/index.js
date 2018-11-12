const GraphQL = require('graphql')
const GraphQLSchema = GraphQL.GraphQLSchema
const GraphQLObjectType = GraphQL.GraphQLObjectType

const queries = require('./queries')
const mutations = require('./mutations')

// Define the GraphQL Schema
module.exports = new GraphQLSchema({

    query: new GraphQLObjectType({
        name: 'Query',
        fields: queries,
        description: 'HPE Task Management API'
    }),

    mutation: new GraphQLObjectType({
        name: 'Mutation',
        fields: mutations,
        description: 'HPE Task Management API'
    })
})