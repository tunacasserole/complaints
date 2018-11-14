const GraphQL = require("graphql");
const GraphQLObjectType = GraphQL.GraphQLObjectType;
const GraphQLString = GraphQL.GraphQLString;
const GraphQLInt = GraphQL.GraphQLInt;
const GraphQLID = GraphQL.GraphQLID;

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
        description: "Version of the task processing module",
        resolve(template) {
          return template.moduleVersion;
        }
      },
      name: {
        type: GraphQLString,
        description: "The unique name for the template",
        resolve(template) {
          return template.name;
        }
      },
      description: {
        type: GraphQLString,
        description: "A brief description of the template",
        resolve(template) {
          return template.description;
        }
      },
      version: {
        type: GraphQLString,
        description: "Version of the template.",
        resolve(template) {
          return template.version;
        }
      },
      configuration: {
        type: GraphQLString,
        description: "A json configuration object with whatever the template needs to do its job.",
        resolve(template) {
          return template.configuration;
        }
      }
    };
  }
});
