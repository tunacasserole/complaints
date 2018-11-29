const GraphQL = require("graphql");
const GraphQLObjectType = GraphQL.GraphQLObjectType;
const GraphQLString = GraphQL.GraphQLString;
const GraphQLID = GraphQL.GraphQLID;

module.exports = new GraphQLObjectType({
  name: "Task",
  fields() {
    return {
      id: {
        type: GraphQLID,
        description: "Unique identifier of the task.",
        resolve(task) {
          return task.id;
        }
      },
      stepId: {
        type: GraphQLID,
        description: "Unique identifier of the related template.",
        resolve(task) {
          return task.stepId;
        }
      },
      projectId: {
        type: GraphQLID,
        description: "Unique identifier of the related project.",
        resolve(task) {
          return task.projectId;
        }
      },
      dueDate: {
        type: GraphQLString,
        description: "The date the task is due.",
        resolve(task) {
          return task.dueDate;
        }
      },
      completeDate: {
        type: GraphQLString,
        description: "The date the task is due.",
        resolve(task) {
          return task.dueDate;
        }
      },
      status: {
        type: GraphQLString,
        description: "The status of the task. valid values are new, ready, done.",
        resolve(task) {
          return task.status;
        }
      },
      result: {
        type: GraphQLString,
        description: "The final output or disposition of the task.  Must be within the list of valid results from the template.",
        resolve(task) {
          return task.result;
        }
      },
      dependencies: {
        type: GraphQLString,
        description: "Task Dependencies",
        resolve(task) {
          return task.dependencies;
        }
      },
      // templateName: {
      //   type: GraphQLString,
      //   decription: 'Template name.',
      //   async resolve(task) {

      //     let response = {}
      //     await task.getTemplate().then((template) => {
      //         response.template = template
      //     }).catch((err) => {
      //         let errors = err.errors.map(error => {
      //             return {
      //                 code: error.path,
      //                 message: error.message
      //             }
      //         })
      //         response.message = "There was an error creating the template"
      //         response.errors = errors
      //         // console.log(response)
      //     })

      //     // return response
      //     return response.template.name

      //   }
      // },
      // groupName: {
      //   type: GraphQLString,
      //   decription: 'Task group name.',
      //   async resolve(task) {

      //     let response = {}
      //     await task.getTaskGroup().then((group) => {
      //         response.group = group
      //     }).catch((err) => {
      //         let errors = err.errors.map(error => {
      //             return {
      //                 code: error.path,
      //                 message: error.message
      //             }
      //         })
      //         response.message = "There was an error creating the group"
      //         response.errors = errors
      //         // console.log(response)
      //     })

      //     // return response
      //     return response.group.name

      //   }
      // }
    };
  }
});
