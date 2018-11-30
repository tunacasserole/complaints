const GraphQL = require("graphql");
const GraphQLObjectType = GraphQL.GraphQLObjectType;
const GraphQLString = GraphQL.GraphQLString;
const GraphQLID = GraphQL.GraphQLID;

const TaskType = require('./stepRule')
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
        description: "Unique identifier of the stepRule that the rule belongs to",
        resolve(stepRule) {
          return stepRule.stepId;
        }
      },
      priorStepId: {
        type: GraphQLID,
        description: "Unique identifier of the prior stepRule that this stepRule depends upon",
        resolve(stepRule) {
          return stepRule.priorStepId;
        }
      },
      priorResult: {
        type: GraphQLString,
        description: "the result from the dependent stepRule that this must be matched or not matched."
      },
      operator: {
        type: GraphQLString,
        description: "The unique name for the stepRule Rule",
        resolve(stepRule) {
          return stepRule.operator;
        }
      }
    }
  }

});
