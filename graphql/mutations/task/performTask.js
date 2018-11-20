const GraphQLJSON = require("graphql-type-json");
const GraphQL = require("graphql");
const GraphQLInputObjectType = GraphQL.GraphQLInputObjectType;
const GraphQLObjectType = GraphQL.GraphQLObjectType;
const GraphQLString = GraphQL.GraphQLString;

const GraphQLNonNull = GraphQL.GraphQLNonNull;

const ErrorType = require('../../types/error')
const TaskType = require('../../types/task')
const Models = require('../../../models/index.js')

const PerformTaskInput = new GraphQLInputObjectType({
    name: "PerformTaskInput",
    description: 'The primary required inputs to perform a task are the id of the task, the result to set it to and in the case of computed tasks, a configuration object.',
    fields() {
        return {
            taskId: {
                type: new GraphQLNonNull(GraphQLString)
            },
            result: {
                type: GraphQLString
            },
            configuration: {
                type: GraphQLJSON
            }
        }
    }
})

const PerformTaskPayload = new GraphQLObjectType({
    name: "PerformTaskPayload",
    description: 'The payload to be returned includes any errors, messages and the task itself.',
    fields() {
        return {
            message: {
                type: GraphQLString,
                description: 'Any success or failure message associated with the execution of this mutation'
            },
            task: {
                type: TaskType,
                description: 'The task that was performed.'
            }
        }
    }
})

module.exports = {
    type: PerformTaskPayload,
    description: 'Perform Task',
    args: {
        input: {
            type: PerformTaskInput,
            description: 'PerformTaskInput ',
        }
    },

    resolve: async (root, args) => {
        let response = { message: "Succesfully performed the task." }

        var task = await Models.Task.findByPk(args.input.taskId)
        
        if (task === null) { response.message = "No task found for that task ID" }
        else {
              response.task = task
              task.performTask(args.input.result, args.input.configuration).then((task) => {
            }).catch((err) => {
                let errors = err.errors.map(error => {
                    return {
                        code: error.path,
                        message: error.message
                    }
                })
                response.message = "There was an error performing the task"
                response.errors = errors

                return response
            })
        }

        return response
    }
};

