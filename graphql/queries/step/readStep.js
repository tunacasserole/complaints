const GraphQL = require('graphql')
const GraphQLString = GraphQL.GraphQLString

const Models = require('../../../models/index.js')
const TaskTemplateType = require('../../types/step.js')

module.exports = {
  type: TaskTemplateType,
  description: 'Returns a single task template for the supplied task template id.',
  args: {
    id: {
      type: GraphQLString,
      description: 'The unique identifier of the task template.',
    }
  },
  
  resolve: async (root, args) => {
    return await Models.TaskTemplate.findById(args.id)
  }
};
