const GraphQL = require("graphql");
const GraphQLObjectType = GraphQL.GraphQLObjectType;
const GraphQLString = GraphQL.GraphQLString;
const GraphQLInt = GraphQL.GraphQLInt;

module.exports = new GraphQLObjectType({
  name: "Template",
  fields() {
    return {
      id: {
        type: GraphQLInt,
        description: "Unique identifier of the template",
        resolve(template) {
          return template.id;
        }
      },
      moduleName: {
        type: GraphQLInt,
        description: "Unique identifier of the related template",
        resolve(template) {
          return template.serviceId;
        }
      },
      moduleVersion: {
        type: GraphQLString,
        description: "The access level of the template",
        resolve(template) {
          return template.access;
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
        description: "A brief description of the template",
        resolve(template) {
          return template.description;
        }
      },
      configuration: {
        type: GraphQLString,
        description: "A brief description of the template",
        resolve(template) {
          return template.description;
        }
      }
    };
  }
});
