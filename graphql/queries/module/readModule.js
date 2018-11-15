const GraphQL = require('graphql')
const GraphQLInt = GraphQL.GraphQLInt
const GraphQLNonNull = GraphQL.GraphQLNonNull

const Models = require('../../../models/index.js')
const ModuleType = require('../../types/module.js')

module.exports = {
  type: ModuleType,
  description: 'Returns a single module for the supplied Module id.',
  args: {
    name: {
      type: GraphQLString,
      description: 'The unique name of the module.',
    },
    metadata: {
      type: GraphQLString,
      description: 'The module metadata including version, inputs, outputs.',
    },
  },
  
  resolve: async (root, args) => {
    return await Models.Module.findById(args.id)
  }
};
