const GraphQL = require('graphql')
const GraphQLInt = GraphQL.GraphQLInt
const GraphQLNonNull = GraphQL.GraphQLNonNull

const Models = require('../../../models/index.js')
const TaskTemplateType = require('../../types/template.js')

module.exports = {
  type: TaskTemplateType,
  description: 'Returns a single task template for the supplied task template id.',
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'The unique identifier of the task template.',
    }
  },
  
  resolve: async (root, args) => {
    return await Models.TaskTemplate.findById(args.id)
  }
};
