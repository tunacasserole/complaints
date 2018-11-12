const GraphQL = require("graphql");
const GraphQLObjectType = GraphQL.GraphQLObjectType;
const GraphQLString = GraphQL.GraphQLString;
const GraphQLInt = GraphQL.GraphQLInt;
const GraphQLUUID = GraphQL.GraphQLUUID;

module.exports = new GraphQLObjectType({
  name: "TaskGroup",
  fields() {
    return {
      id: {
        type: GraphQLUUID,
        description: "Unique identifier of the TaskGroup",
        resolve(taskGroup) {
          return taskGroup.id;
        }
      },
      name: {
        type: GraphQLString,
        description: "The unique name for the taskGroup",
        resolve(taskGroup) {
          return taskGroup.name;
        }
      },
      description: {
        type: GraphQLString,
        description: "A brief description of the taskGroup",
        resolve(taskGroup) {
          return taskGroup.description;
        }
      },
      version: {
        type: GraphQLString,
        description: "A brief description of the taskGroup",
        resolve(taskGroup) {
          return taskGroup.description;
        }
      },
      configuration: {
        type: GraphQLString,
        description: "A brief description of the taskGroup",
        resolve(taskGroup) {
          return taskGroup.description;
        }
      }
    };
  }
});
