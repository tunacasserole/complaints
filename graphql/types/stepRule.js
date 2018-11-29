const GraphQL = require("graphql");
const GraphQLObjectType = GraphQL.GraphQLObjectType;
const GraphQLString = GraphQL.GraphQLString;
const GraphQLID = GraphQL.GraphQLID;

const TaskType = require('./task')
const Models = require('../../models/index.js')

module.exports = new GraphQLObjectType({
  name: "StepRule",
  fields() {
    return {
      id: {
        type: GraphQLID,
        description: "Unique identifier of the Task Rule",
        resolve(stepRule) {
          return stepRule.id;
        }
      },
      stepId: {
        type: GraphQLID,
        description: "Unique identifier of the task that the rule belongs to",
        resolve(stepRule) {
          return stepRule.stepId;
        }
      },
      priorStepId: {
        type: GraphQLID,
        description: "Unique identifier of the prior task that this task depends upon",
        resolve(stepRule) {
          return stepRule.priorStepId;
        }
      },
      priorResult: {
        type: GraphQLString,
        description: "the result from the dependent task that this must be matched or not matched."
      },
      operator: {
        type: GraphQLString,
        description: "The unique name for the task Rule",
        resolve(stepRule) {
          return stepRule.operator;
        }
      }
    }
  }

});
