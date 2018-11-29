const GraphQL = require("graphql");
const GraphQLObjectType = GraphQL.GraphQLObjectType;
const GraphQLString = GraphQL.GraphQLString;
const GraphQLInt = GraphQL.GraphQLInt;
const GraphQLID = GraphQL.GraphQLID;
const GraphQLList = GraphQL.GraphQLList;
const TaskType = require('./task')
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
        description: "Name of the module that will contain the logic for performing this task",
        resolve(step) {
          return step.moduleName;
        },
        validate: {
          isIn: [['', '']],
        }
      },
      moduleVersion: {
        type: GraphQLInt,
        description: "Version of the task processing module to use when performing this task",
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
        description: "A comma separated list of values the user can select from to set the result of the task.  Leave blank for free text",
        resolve(step) {
          return step.results;
        }
      },
      tasks: {
        type: new GraphQLList(TaskType),
        description: "The tasks associated to the step",
        async resolve(step) {
          let response = {}
          await step.getTasks().then((taskData) => {
            response.tasks = taskData
          }).catch((err) => {
              let errors = err.errors.map(error => {
                  return {
                      code: error.path,
                      message: error.message
                  }
              })
              response.message = "There was an error creating the step"
              response.errors = errors
          })
          return response.tasks

        }

      }
    };
  }
});
