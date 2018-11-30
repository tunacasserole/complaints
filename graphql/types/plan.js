const GraphQL = require("graphql");
const GraphQLObjectType = GraphQL.GraphQLObjectType;
const GraphQLString = GraphQL.GraphQLString;
const GraphQLInt = GraphQL.GraphQLInt;
const GraphQLID = GraphQL.GraphQLID;
const PlanType = require('./plan')
const Models = require('../../models/index.js')

module.exports = new GraphQLObjectType({
  name: "Plan",
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
      // tasks: {
      //   type: new GraphQLList(PlanType),
      //   description: "The tasks associated to the group",
      //   async resolve(plan) {
      //     let response = {}
      //     await plan.getTasks().then((taskData) => {
      //       response.tasks = taskData
      //     }).catch((err) => {
      //       let errors = err.errors.map(error => {
      //         return {
      //           code: error.path,
      //           message: error.message
      //         }
      //       })
      //       response.message = "There was an error creating the group"
      //       response.errors = errors
      //     })
      //     return response.tasks

      //   }
      // }
    }
  }

});
