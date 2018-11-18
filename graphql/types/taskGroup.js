const GraphQL = require("graphql");
const GraphQLObjectType = GraphQL.GraphQLObjectType;
const GraphQLString = GraphQL.GraphQLString;
const GraphQLList = GraphQL.GraphQLList;
const GraphQLID = GraphQL.GraphQLID;
const TaskType = require('./task')
const Models = require('../../models/index.js')

module.exports = new GraphQLObjectType({
  name: "TaskGroup",
  fields() {
    return {
      id: {
        type: GraphQLID,
        description: "Unique identifier of the TaskGroup",
        resolve(taskGroup) {
          return taskGroup.id;
        }
      },
      name: {
        type: GraphQLString,
        description: "The unique name for the taskGroup",
        resolve(taskGroup) {
          return taskGroup.name;
        }
      },
      description: {
        type: GraphQLString,
        description: "A brief description of the taskGroup",
        resolve(taskGroup) {
          return taskGroup.description;
        }
      },
      tasks: {
        type: new GraphQLList(TaskType),
        description: "The tasks associated to the group",
        async resolve(taskGroup) {
          let response = {}
          await taskGroup.getTasks().then((taskData) => {
            response.tasks = taskData
          }).catch((err) => {
            let errors = err.errors.map(error => {
              return {
                code: error.path,
                message: error.message
              }
            })
            response.message = "There was an error creating the group"
            response.errors = errors
          })
          return response.tasks

        }
      }
    }
  }

});
