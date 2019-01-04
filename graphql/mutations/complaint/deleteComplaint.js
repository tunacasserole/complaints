const GraphQL = require("graphql");
const GraphQLObjectType = GraphQL.GraphQLObjectType;
const GraphQLInputObjectType = GraphQL.GraphQLInputObjectType;
const GraphQLString = GraphQL.GraphQLString
const GraphQLInt = GraphQL.GraphQLInt
const GraphQLFloat = GraphQL.GraphQLFloat
const GraphQLBoolean = GraphQL.GraphQLBoolean
const GraphQLList = GraphQL.GraphQLList

const Models = require('../../../models/index.js')
const ErrorType = require('../../types/error')
const ComplaintType = require('../../types/complaint')

const DeleteComplaintInput = new GraphQLInputObjectType({
    name: "DeleteComplaintInput",
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
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

const DeleteComplaintPayload = new GraphQLObjectType({
    name: 'DeleteComplaintPayload',
    description: 'Lorem ipsum dolar sit',
    fields() { 
        return {
            message: {
                type: GraphQLString,
                description: 'Lorem ipsum dolar sit'
            },
            errors: {
                type: new GraphQLList(ErrorType),
                description: 'Lorem ipsum dolar sit'
            },
            complaint: {
                type: ComplaintType,
                description: 'Lorem ipsum dolar sit'
            }
        }
    }
})

module.exports = {
  type: DeleteComplaintPayload,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  args: {
    input: {
      type: DeleteComplaintInput,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    }
  },
  
  resolve: async (root, args) => {
    let response = {}
    await Models.Complaint.create(args.input).then((complaint) => {
        response.complaint = complaint
    }).catch((err) => {
        let errors = err.errors.map(error => {
            return {
                code: error.path,
                message: error.message
            }
        })
        response.message = "There was an error creating the action"
        response.errors = errors
    })
    // return response
    return response
  }
};
