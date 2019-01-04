const GraphQL = require("graphql");
const GraphQLObjectType = GraphQL.GraphQLObjectType;
const GraphQLInputObjectType = GraphQL.GraphQLInputObjectType;
const GraphQLString = GraphQL.GraphQLString
const GraphQLInt = GraphQL.GraphQLInt
const GraphQLFloat = GraphQL.GraphQLFloat
const GraphQLBoolean = GraphQL.GraphQLBoolean
const GraphQLList = GraphQL.GraphQLList

const Models = require('../../../models/index.js')
const ComplaintType = require('../../types/complaint.js')

module.exports = {
  type: ComplaintType,
  description: 'Returns a single access task for the supplied complaint id.',
  args: {
        
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
      
  },
  
  resolve: async (root, args) => {
    return await Models.Complaint.findById(args.id)
  }
};


