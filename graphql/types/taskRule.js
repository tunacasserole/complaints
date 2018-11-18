const GraphQL = require("graphql");
const GraphQLObjectType = GraphQL.GraphQLObjectType;
const GraphQLString = GraphQL.GraphQLString;
const GraphQLID = GraphQL.GraphQLID;

const TaskType = require('./task')
const Models = require('../../models/index.js')

module.exports = new GraphQLObjectType({
  name: "TaskRule",
  fields() {
    return {
      id: {
        type: GraphQLID,
        description: "Unique identifier of the Task Rule",
        resolve(taskRule) {
          return taskRule.id;
        }
      },
      taskId: {
        type: GraphQLID,
        description: "Unique identifier of the task that the rule belongs to",
        resolve(taskRule) {
          return taskRule.taskId;
        }
      },
      priorTaskId: {
        type: GraphQLID,
        description: "Unique identifier of the prior task that this task depends upon",
        resolve(taskRule) {
          return taskRule.taskId;
        }
      },
      priorResult: {
        type: GraphQLString,
        description: "the result from the dependent task that this must be matched or not matched."
      },
      name: {
        type: GraphQLString,
        description: "The unique name for the task Rule",
        resolve(taskRule) {
          return taskRule.name;
        }
      },
      type: {
        type: GraphQLString,
        description: "The type of rule being executed (equal, not equal}"
      },

    }
  }

});
