const GraphQL = require('graphql')
const GraphQLInt = GraphQL.GraphQLInt
const GraphQLNonNull = GraphQL.GraphQLNonNull

const Models = require('../../../models/index.js')
const TaskType = require('../../types/task.js')

module.exports = {
  type: TaskType,
  description: 'Returns a single task for the supplied task id.',
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'The unique identifier of the task.',
    }
  },
  
  resolve: async (root, args) => {
    return await Models.Task.findById(args.id)
  }
};
