const GraphQL = require('graphql')
const GraphQLInt = GraphQL.GraphQLInt
const GraphQLNonNull = GraphQL.GraphQLNonNull
const GraphQLString = GraphQL.GraphQLString

const Models = require('../../../models/index.js')
const ProjectTaskType = require('../../types/projectTask.js')

module.exports = {
  type: ProjectTaskType,
  description: 'Returns a single projectTask for the supplied projectTask id.',
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The unique identifier of the projectTask.',
    }
  },

  resolve: async (root, args) => {
    return await Models.ProjectTask.findById(args.id)
  }
};
