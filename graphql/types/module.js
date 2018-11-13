const GraphQL = require("graphql");
const GraphQLObjectType = GraphQL.GraphQLObjectType;
const GraphQLString = GraphQL.GraphQLString;

module.exports = new GraphQLObjectType({
  name: "Module",
  fields() {
    return {
      name: {
        type: GraphQLString,
        description: "The name of the module.",
        resolve(module) {
          return module.name;
        }
      }
    };
  }
});
