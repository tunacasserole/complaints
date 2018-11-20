const GraphQL = require('graphql')
const GraphQLList = GraphQL.GraphQLList
const GraphQLString = GraphQL.GraphQLString
const GraphQLInt = GraphQL.GraphQLInt
const Models = require('../../../models/index.js')
const TemplateType = require('../../types/template.js')

module.exports = {
  type: new GraphQLList(TemplateType),
  description: 'Returns a list of templates in the system..',
  args: {
    limit: {
      type: GraphQLInt,
      description: 'Limits the number of results returned in the page. Defaults to 10.',
    },
    offset: {
      type: GraphQLInt,
      description: 'Indicates the starting record from where the limit will be applied. Defaults to 0.'
    },
    search: {
      type: GraphQLString,
      description: 'String input for full-text searching. Supported fields include office name, person first and last name, address, city and state.'
    },
    sorters: {
      type: new GraphQLList(GraphQLString),
      description: 'A list of sorting rules to be applied to the request.'
    }
  },

  resolve: async (root, args) => {
    // Establish defaults and remove from arguments
    const offset = args.offset || 0
    const limit = args.limit || 10
    const search = args.search
    delete args.offset
    delete args.limit
    delete args.search

    // Issue query and return the promise
    return await Models.Template.findAll()
  }
};
