const GraphQL = require('graphql')
const GraphQLInt = GraphQL.GraphQLInt
const GraphQLNonNull = GraphQL.GraphQLNonNull

const Models = require('../../../models/index.js')
const TaskGroupType = require('../../types/taskGroup.js')

module.exports = {
  type: TaskGroupType,
  description: 'Returns a single task for the supplied task group id.',
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'The unique identifier of the task group.',
    }
  },
  
  resolve: async (root, args) => {
    return await Models.Task.findById(args.id)
  }
};
