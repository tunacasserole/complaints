const GraphQL = require("graphql");
const GraphQLObjectType = GraphQL.GraphQLObjectType;
const GraphQLString = GraphQL.GraphQLString;
const GraphQLInt = GraphQL.GraphQLInt;
const GraphQLID = GraphQL.GraphQLID;
const GraphQLList = GraphQL.GraphQLList;
const TaskType = require('./task')
const Models = require('../../models/index.js')

module.exports = new GraphQLObjectType({
  name: "Template",
  fields() {
    return {
      id: {
        type: GraphQLID,
        description: "Unique identifier of the template",
        resolve(template) {
          return template.id;
        }
      },
      name: {
        type: GraphQLString,
        description: "The unique name for the template",
        resolve(template) {
          return template.name;
        }
      },
      version: {
        type: GraphQLString,
        description: "Version of the template.",
        resolve(template) {
          return template.version;
        }
      },
      moduleName: {
        type: GraphQLInt,
        description: "Name of the module that will contain the logic for performing this task",
        resolve(template) {
          return template.moduleName;
        },
        validate: {
          isIn: [['', '']],
        }
      },
      moduleVersion: {
        type: GraphQLString,
        description: "Version of the task processing module to use when performing this task",
        resolve(template) {
          return template.moduleVersion;
        }
      },
      description: {
        type: GraphQLString,
        description: "A brief description of the template",
        resolve(template) {
          return template.description;
        }
      },
      resultType: {
        type: GraphQLString,
        description: "The kind of result for data capture."
      },
      results: {
        type: new GraphQLList(GraphQLString),
        description: "A comma separated list of values the user can select from to set the result of the task.  Leave blank for free text",
        resolve(template) {
          return template.results;
        }
      },
      tasks: {
        type: new GraphQLList(TaskType),
        description: "The tasks associated to the template",
        async resolve(template) {
          let response = {}
          await template.getTasks().then((taskData) => {
            response.tasks = taskData
          }).catch((err) => {
              let errors = err.errors.map(error => {
                  return {
                      code: error.path,
                      message: error.message
                  }
              })
              response.message = "There was an error creating the template"
              response.errors = errors
          })
          return response.tasks

        }

      }
    };
  }
});
