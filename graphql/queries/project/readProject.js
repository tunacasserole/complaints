const GraphQL = require('graphql')
const GraphQLInt = GraphQL.GraphQLInt
const GraphQLNonNull = GraphQL.GraphQLNonNull
const GraphQLString = GraphQL.GraphQLString

const Models = require('../../../models/index.js')
const ProjectType = require('../../types/project.js')

module.exports = {
  type: ProjectType,
  description: 'Returns a single project for the supplied project id.',
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The unique identifier of the project.',
    }
  },

  resolve: async (root, args) => {
    return await Models.Project.findById(args.id)
  }
};
