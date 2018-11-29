const GraphQL = require("graphql");
const GraphQLObjectType = GraphQL.GraphQLObjectType;
const GraphQLString = GraphQL.GraphQLString;
const GraphQLID = GraphQL.GraphQLID;

const TaskType = require('./task')
const Models = require('../../models/index.js')

module.exports = new GraphQLObjectType({
  name: "PlanStep",
  fields() {
    return {
      id: {
        type: GraphQLID,
        description: "Unique identifier of the Task Rule",
        resolve(PlanStep) {
          return PlanStep.id;
        }
      },
      planId: {
        type: GraphQLID,
        description: "Unique identifier of the task that the rule belongs to",
        resolve(PlanStep) {
          return PlanStep.planId;
        }
      },
      stepId: {
        type: GraphQLID,
        description: "Unique identifier of the prior task that this task depends upon",
        resolve(PlanStep) {
          return PlanStep.taskId;
        }
      },
    }
  }

});
