const GraphQL = require("graphql");
const GraphQLObjectType = GraphQL.GraphQLObjectType;
const GraphQLString = GraphQL.GraphQLString;
const GraphQLInt = GraphQL.GraphQLInt;
const GraphQLID = GraphQL.GraphQLID;
const GraphQLList = GraphQL.GraphQLList;

const StepType = require('./step')

const Models = require('../../models/index.js')

module.exports = new GraphQLObjectType({
  name: "Step",
  fields() {
    return {
      id: {
        type: GraphQLID,
        description: "Unique identifier of the step",
        resolve(step) {
          return step.id;
        }
      },
      name: {
        type: GraphQLString,
        description: "The unique name for the step",
        resolve(step) {
          return step.name;
        }
      },
      version: {
        type: GraphQLString,
        description: "Version of the step.",
        resolve(step) {
          return step.version;
        }
      },
      moduleName: {
        type: GraphQLString,
        description: "Name of the module that will contain the logic for performing this step",
        resolve(step) {
          return step.moduleName;
        },
        validate: {
          isIn: [['', '']],
        }
      },
      moduleVersion: {
        type: GraphQLInt,
        description: "Version of the step processing module to use when performing this step",
        resolve(step) {
          return step.moduleVersion;
        }
      },
      description: {
        type: GraphQLString,
        description: "A brief description of the step",
        resolve(step) {
          return step.description;
        }
      },
      resultType: {
        type: GraphQLString,
        description: "The kind of result for data capture."
      },
      results: {
        type: new GraphQLList(GraphQLString),
        description: "A comma separated list of values the user can select from to set the result of the step.  Leave blank for free text",
        resolve(step) {
          return step.results;
        }
      }
    };
  }
});
