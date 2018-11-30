const GraphQL = require("graphql");
const GraphQLObjectType = GraphQL.GraphQLObjectType;
const GraphQLString = GraphQL.GraphQLString;
const GraphQLList = GraphQL.GraphQLList;
const GraphQLID = GraphQL.GraphQLID;

const ProjectType = require('./project')
const Models = require('../../models/index.js')

module.exports = new GraphQLObjectType({
  name: "Project",
  fields() {
    return {
      id: {
        type: GraphQLID,
        resolve(Project) {
          return Project.id;
        }
      },
      planId: {
        type: GraphQLString,
        resolve(Project) {
          return Project.name;
        }
      },
      parentId: {
        type: GraphQLString,
        resolve(Project) {
          return Project.name;
        }
      },
      name: {
        type: GraphQLString,
        resolve(Project) {
          return Project.name;
        }
      },
      description: {
        type: GraphQLString,
        resolve(Project) {
          return Project.name;
        }
      },
      state: {
        type: GraphQLString,
        resolve(Project) {
          return Project.name;
        }
      },
      startDate: {
        type: GraphQLString,
        resolve(Project) {
          return Project.name;
        }
      },
      dueDate: {
        type: GraphQLString,
        resolve(Project) {
          return Project.name;
        }
      },
      completeDate: {
        type: GraphQLString,
        resolve(Project) {
          return Project.name;
        }
      },
      ownerId: {
        type: GraphQLString,
        resolve(Project) {
          return Project.name;
        }
      },

      // projects: {
      //   type: new GraphQLList(ProjectType),
      //   description: "The projects associated to the group",
      //   async resolve(Project) {
      //     let response = {}
      //     await Project.getProjects().then((projectData) => {
      //       response.projects = projectData
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
      //     return response.projects

      //   }
      // }
    }
  }

});
