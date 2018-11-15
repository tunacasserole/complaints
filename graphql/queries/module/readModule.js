const GraphQL = require('graphql')
const GraphQLInt = GraphQL.GraphQLInt
const GraphQLNonNull = GraphQL.GraphQLNonNull

const Models = require('../../../models/index.js')
const ModuleType = require('../../types/module.js')

module.exports = {
  type: ModuleType,
  description: 'Returns a single module with metadata and configuration information for the supplied Module name.',
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
    return 'not yet implemented'
  }
};
