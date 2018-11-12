const GraphQL = require("graphql");
const GraphQLObjectType = GraphQL.GraphQLObjectType;
const GraphQLString = GraphQL.GraphQLString;
const GraphQLInt = GraphQL.GraphQLInt;

module.exports = new GraphQLObjectType({
  name: "Task",
  fields() {
    return {
      id: {
        type: GraphQLInt,
        description: "Unique identifier of the task",
        resolve(task) {
          return task.id;
        }
      },
      taskTemplateId: {
        type: GraphQLInt,
        description: "Unique identifier of the related task",
        resolve(task) {
          return task.serviceId;
        }
      },
      taskGroupId: {
        type: GraphQLString,
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
