const GraphQL = require("graphql");
const GraphQLObjectType = GraphQL.GraphQLObjectType;
const GraphQLString = GraphQL.GraphQLString;

module.exports = new GraphQLObjectType({
  name: "Error",
  fields() {
    return {
      code: {
        type: GraphQLString,
        description: "The code or key to the error",
        resolve(error) {
          return error.code;
        }
      },
      message: {
        type: GraphQLString,
        description: "The error message to accompany the key",
        resolve(error) {
          return error.message;
        }
      }
    };
  }
});
