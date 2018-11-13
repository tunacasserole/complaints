const GraphQL = require("graphql");
const GraphQLObjectType = GraphQL.GraphQLObjectType;
const GraphQLString = GraphQL.GraphQLString;
const GraphQLUUID = GraphQL.GraphQLUUID;

module.exports = new GraphQLObjectType({
  name: "Task",
  fields() {
    return {
      templateId: {
        type: GraphQLUUID,
        description: "Unique identifier of the related task",
        resolve(task) {
          return task.serviceId;
        }
      },
      taskGroupId: {
        type: GraphQLUUID,
        description: "The access level of the task",
        resolve(task) {
          return task.access;
        }
      },
      eta: {
        type: GraphQLString,
        description: "The unique name for the task",
        resolve(task) {
          return task.name;
        }
      },
      status: {
        type: GraphQLString,
        description: "A brief description of the task",
        resolve(task) {
          return task.description;
        }
      },
      data: {
        type: GraphQLString,
        description: "A brief description of the task",
        resolve(task) {
          return task.description;
        }
      },
      dependencies: {
        type: GraphQLString,
        description: "A brief description of the task",
        resolve(task) {
          return task.description;
        }
      }
    };
  }
});
