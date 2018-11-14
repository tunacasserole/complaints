const GraphQL = require("graphql");
const GraphQLObjectType = GraphQL.GraphQLObjectType;
const GraphQLString = GraphQL.GraphQLString;
const GraphQLUUID = GraphQL.GraphQLUUID;
const GraphQLID = GraphQL.GraphQLID;

module.exports = new GraphQLObjectType({
  name: "Task",
  fields() {
    return {
      templateId: {
        type: GraphQLID,
        description: "Unique identifier of the related task",
        resolve(task) {
          return task.serviceId;
        }
      },
      taskGroupId: {
        type: GraphQLID,
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
      disposition: {
        type: GraphQLString,
        description: "The end result of the task.  Must be within the list of valid dispositions for singleSelect and multiSelect tasks.",
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
