const GraphQL = require("graphql");
const GraphQLObjectType = GraphQL.GraphQLObjectType;
const GraphQLInputObjectType = GraphQL.GraphQLInputObjectType;
const GraphQLString = GraphQL.GraphQLString
const GraphQLInt = GraphQL.GraphQLInt
const GraphQLFloat = GraphQL.GraphQLFloat
const GraphQLBoolean = GraphQL.GraphQLBoolean
const GraphQLList = GraphQL.GraphQLList

const Models = require('../../../models/index.js')

const ComplaintListType = new GraphQLObjectType({
  name: 'ComplaintList',
  fields() {
    return {
            
        id: {
          type: GraphQLInt,
          description: "description",
        },
        
        program_id: {
          type: GraphQLInt,
          description: "description",
        },
        
        client_id: {
          type: GraphQLInt,
          description: "description",
        },
        
        provider_id: {
          type: GraphQLInt,
          description: "description",
        },
        
        owner_id: {
          type: GraphQLInt,
          description: "description",
        },
        
        worker_id: {
          type: GraphQLInt,
          description: "description",
        },
        
        resolver_id: {
          type: GraphQLInt,
          description: "description",
        },
        
        state: {
          type: GraphQLString,
          description: "description",
        },
        
        complainant_name: {
          type: GraphQLString,
          description: "description",
        },
        
        complainant_id: {
          type: GraphQLInt,
          description: "description",
        },
        
        provider_number: {
          type: GraphQLString,
          description: "description",
        },
        
        reason_name: {
          type: GraphQLString,
          description: "description",
        },
        
        referred_to: {
          type: GraphQLString,
          description: "description",
        },
        
        complainant_type_id: {
          type: GraphQLInt,
          description: "description",
        },
        
        complainant_relationship_id: {
          type: GraphQLInt,
          description: "description",
        },
        
        reason_id: {
          type: GraphQLInt,
          description: "description",
        },
        
        description: {
          type: GraphQLString,
          description: "description",
        },
        
        created_at: {
          type: GraphQLString,
          description: "description",
        },
        
        updated_at: {
          type: GraphQLString,
          description: "description",
        },
        
        deleted_at: {
          type: GraphQLString,
          description: "description",
        },
        
        created_by: {
          type: GraphQLInt,
          description: "description",
        },
        
        updated_by: {
          type: GraphQLInt,
          description: "description",
        },
        
        deleted_by: {
          type: GraphQLInt,
          description: "description",
        },
        
        resolved_on: {
          type: GraphQLString,
          description: "description",
        },
        
        occurred_on: {
          type: GraphQLString,
          description: "description",
        },
        
        case_manager_id: {
          type: GraphQLInt,
          description: "description",
        },
        
        service_ids: {
          type: GraphQLString,
          description: "description",
        },
        
        service_delivery_problem_ids: {
          type: GraphQLString,
          description: "description",
        },
        
        contract_problem_ids: {
          type: GraphQLString,
          description: "description",
        },
        
        billed_on: {
          type: GraphQLString,
          description: "description",
        },
        
        documented_on: {
          type: GraphQLString,
          description: "description",
        },
        
        due_on: {
          type: GraphQLString,
          description: "description",
        },
        
        completed_on: {
          type: GraphQLString,
          description: "description",
        },
        
        started_on: {
          type: GraphQLString,
          description: "description",
        },
        
        ended_on: {
          type: GraphQLString,
          description: "description",
        },
        
        aps_contacted_on: {
          type: GraphQLString,
          description: "description",
        },
        
        hospitalizations_within_30_days: {
          type: GraphQLBoolean,
          description: "description",
        },
        
        
    }
  }
})

module.exports = {
  type: new GraphQLList(ComplaintListType),
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum sapien lacus, ut imperdiet orci elementum sed. Donec lobortis vel nunc sit amet luctus.',
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
    return await Models.Complaint.findAll({where: args, include: [], offset, limit })
  }
};
