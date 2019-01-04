const GraphQL = require('graphql')
const GraphQLList = GraphQL.GraphQLList
const GraphQLString = GraphQL.GraphQLString
const GraphQLBoolean = GraphQL.GraphQLBoolean
const GraphQLInt = GraphQL.GraphQLInt
const GraphQLObjectType = GraphQL.GraphQLObjectType;

module.exports = new GraphQLObjectType({
  name: "Complaint",
  fields() {
    return {
            
        id: {
          type: GraphQLInt,
          description: "description",
          resolve(Complaint) {
            return Complaint.id;
          }
        },
        
        program_id: {
          type: GraphQLInt,
          description: "description",
          resolve(Complaint) {
            return Complaint.program_id;
          }
        },
        
        client_id: {
          type: GraphQLInt,
          description: "description",
          resolve(Complaint) {
            return Complaint.client_id;
          }
        },
        
        provider_id: {
          type: GraphQLInt,
          description: "description",
          resolve(Complaint) {
            return Complaint.provider_id;
          }
        },
        
        owner_id: {
          type: GraphQLInt,
          description: "description",
          resolve(Complaint) {
            return Complaint.owner_id;
          }
        },
        
        worker_id: {
          type: GraphQLInt,
          description: "description",
          resolve(Complaint) {
            return Complaint.worker_id;
          }
        },
        
        resolver_id: {
          type: GraphQLInt,
          description: "description",
          resolve(Complaint) {
            return Complaint.resolver_id;
          }
        },
        
        state: {
          type: GraphQLString,
          description: "description",
          resolve(Complaint) {
            return Complaint.state;
          }
        },
        
        complainant_name: {
          type: GraphQLString,
          description: "description",
          resolve(Complaint) {
            return Complaint.complainant_name;
          }
        },
        
        complainant_id: {
          type: GraphQLInt,
          description: "description",
          resolve(Complaint) {
            return Complaint.complainant_id;
          }
        },
        
        provider_number: {
          type: GraphQLString,
          description: "description",
          resolve(Complaint) {
            return Complaint.provider_number;
          }
        },
        
        reason_name: {
          type: GraphQLString,
          description: "description",
          resolve(Complaint) {
            return Complaint.reason_name;
          }
        },
        
        referred_to: {
          type: GraphQLString,
          description: "description",
          resolve(Complaint) {
            return Complaint.referred_to;
          }
        },
        
        complainant_type_id: {
          type: GraphQLInt,
          description: "description",
          resolve(Complaint) {
            return Complaint.complainant_type_id;
          }
        },
        
        complainant_relationship_id: {
          type: GraphQLInt,
          description: "description",
          resolve(Complaint) {
            return Complaint.complainant_relationship_id;
          }
        },
        
        reason_id: {
          type: GraphQLInt,
          description: "description",
          resolve(Complaint) {
            return Complaint.reason_id;
          }
        },
        
        description: {
          type: GraphQLString,
          description: "description",
          resolve(Complaint) {
            return Complaint.description;
          }
        },
        
        created_at: {
          type: GraphQLString,
          description: "description",
          resolve(Complaint) {
            return Complaint.created_at;
          }
        },
        
        updated_at: {
          type: GraphQLString,
          description: "description",
          resolve(Complaint) {
            return Complaint.updated_at;
          }
        },
        
        deleted_at: {
          type: GraphQLString,
          description: "description",
          resolve(Complaint) {
            return Complaint.deleted_at;
          }
        },
        
        created_by: {
          type: GraphQLInt,
          description: "description",
          resolve(Complaint) {
            return Complaint.created_by;
          }
        },
        
        updated_by: {
          type: GraphQLInt,
          description: "description",
          resolve(Complaint) {
            return Complaint.updated_by;
          }
        },
        
        deleted_by: {
          type: GraphQLInt,
          description: "description",
          resolve(Complaint) {
            return Complaint.deleted_by;
          }
        },
        
        resolved_on: {
          type: GraphQLString,
          description: "description",
          resolve(Complaint) {
            return Complaint.resolved_on;
          }
        },
        
        occurred_on: {
          type: GraphQLString,
          description: "description",
          resolve(Complaint) {
            return Complaint.occurred_on;
          }
        },
        
        case_manager_id: {
          type: GraphQLInt,
          description: "description",
          resolve(Complaint) {
            return Complaint.case_manager_id;
          }
        },
        
        service_ids: {
          type: GraphQLString,
          description: "description",
          resolve(Complaint) {
            return Complaint.service_ids;
          }
        },
        
        service_delivery_problem_ids: {
          type: GraphQLString,
          description: "description",
          resolve(Complaint) {
            return Complaint.service_delivery_problem_ids;
          }
        },
        
        contract_problem_ids: {
          type: GraphQLString,
          description: "description",
          resolve(Complaint) {
            return Complaint.contract_problem_ids;
          }
        },
        
        billed_on: {
          type: GraphQLString,
          description: "description",
          resolve(Complaint) {
            return Complaint.billed_on;
          }
        },
        
        documented_on: {
          type: GraphQLString,
          description: "description",
          resolve(Complaint) {
            return Complaint.documented_on;
          }
        },
        
        due_on: {
          type: GraphQLString,
          description: "description",
          resolve(Complaint) {
            return Complaint.due_on;
          }
        },
        
        completed_on: {
          type: GraphQLString,
          description: "description",
          resolve(Complaint) {
            return Complaint.completed_on;
          }
        },
        
        started_on: {
          type: GraphQLString,
          description: "description",
          resolve(Complaint) {
            return Complaint.started_on;
          }
        },
        
        ended_on: {
          type: GraphQLString,
          description: "description",
          resolve(Complaint) {
            return Complaint.ended_on;
          }
        },
        
        aps_contacted_on: {
          type: GraphQLString,
          description: "description",
          resolve(Complaint) {
            return Complaint.aps_contacted_on;
          }
        },
        
        hospitalizations_within_30_days: {
          type: GraphQLBoolean,
          description: "description",
          resolve(Complaint) {
            return Complaint.hospitalizations_within_30_days;
          }
        },
        
    };
  }
});
