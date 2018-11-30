const GraphQL = require('graphql')
const GraphQLInt = GraphQL.GraphQLInt
const GraphQLNonNull = GraphQL.GraphQLNonNull
const GraphQLString = GraphQL.GraphQLString

const Models = require('../../../models/index.js')
const PlanType = require('../../types/plan.js')

module.exports = {
  type: PlanType,
  description: 'Returns a single plan for the supplied plan id.',
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The unique identifier of the plan.',
    }
  },

  resolve: async (root, args) => {
    return await Models.Plan.findById(args.id)
  }
};
