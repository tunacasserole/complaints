const GraphQL = require('graphql')
const GraphQLList = GraphQL.GraphQLList
const GraphQLString = GraphQL.GraphQLString
const GraphQLInt = GraphQL.GraphQLInt
const GraphQLObjectType = GraphQL.GraphQLObjectType;
const GraphQLID = GraphQL.GraphQLID;

const Models = require('../../../models/index.js')
const StepType = require('../../types/step.js')

const PlanType = new GraphQLObjectType({
  name: "PlanType",
  fields() {
    return {
      id: {
        type: GraphQLID,
        resolve(plan) {
          return plan.id;
        }
      },
      parentId: {
        type: GraphQLID,
        resolve(plan) {
          return plan.parentId;
        }
      },
      name: {
        type: GraphQLString,
        resolve(plan) {
          return plan.name;
        }
      },
      description: {
        type: GraphQLString,
        resolve(plan) {
          return plan.description;
        }
      },
      businessUnit: {
        type: GraphQLID,
        resolve(plan) {
          return plan.businessUnit;
        }
      },
      productClass: {
        type: GraphQLString,
        resolve(plan) {
          return plan.descproductClassription;
        }
      },
      duration: {
        type: GraphQLInt,
        resolve(plan) {
          return plan.duration;
        }
      },
      version: {
        type: GraphQLInt,
        resolve(plan) {
          return plan.version;
        }
      },
      scheduleMethod: {
        type: GraphQLString,
        resolve(plan) {
          return plan.scheduleMethod;
        }
      },
      steps: {
        type: new GraphQLList(StepType),
        description: "The steps associated to the group",
        async resolve(plan) {
          let response = {}
          await plan.getSteps().then((stepData) => {
            response.steps = stepData
          }).catch((err) => {
            let errors = err.errors.map(error => {
              return {
                code: error.path,
                message: error.message
              }
            })
            response.message = "There was an error listing the steps"
            response.errors = errors
          })
          return response.steps

        }
      }
    }
  }

});

module.exports = {
  type: new GraphQLList(PlanType),
  description: 'Returns a list of all tasks in the system..',
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
    // return await Models.Plan.findAll({ where: args, include: [{ model: Models.Template, required: true }], offset, limit })
    return await Models.Plan.findAll({ where: args })
  }
};
