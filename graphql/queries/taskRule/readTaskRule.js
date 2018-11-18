const GraphQL = require('graphql')
const GraphQLNonNull = GraphQL.GraphQLNonNull
const GraphQLString = GraphQL.GraphQLString

const Models = require('../../../models/index.js')
const TaskRuleType = require('../../types/taskRUle.js')

module.exports = {
  type: TaskRuleType,
  description: 'Returns a single task for the supplied task group id.',
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The unique identifier of the task group.',
    }
  },
  
  resolve: async (root, args) => {
    return await Models.TaskRUle.findById(args.id)
  }
};
