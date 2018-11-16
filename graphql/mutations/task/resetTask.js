const GraphQL = require("graphql");
const GraphQLInputObjectType = GraphQL.GraphQLInputObjectType;
const GraphQLObjectType = GraphQL.GraphQLObjectType;
const GraphQLString = GraphQL.GraphQLString;
const GraphQLFloat = GraphQL.GraphQLFloat;
const GraphQLList = GraphQL.GraphQLList;
const GraphQLNonNull = GraphQL.GraphQLNonNull;

const ErrorType = require('../../types/error')
const TaskType = require('../../types/task')
const Models = require('../../../models/index.js')

const ResetTaskInput = new GraphQLInputObjectType({
    name: "ResetTaskInput",
    description: 'The primary required inputs to reset a task are the id of the task you wish to reset.  This means setting the status back to new, erasing the result and complete date.',
    fields() {
        return {
            taskId: {
                type: new GraphQLNonNull(GraphQLString)
            },
            result: {
                type: GraphQLString
            },
            configuration: {
                type: GraphQLString
            }
        }
    }
})

const ResetTaskPayload = new GraphQLObjectType({
    name: "ResetTaskPayload",
    description: 'The payload to be returned includes any errors, messages and the task itself.',
    fields() {
        return {
            message: {
                type: GraphQLString,
                description: 'Any success or failure message associated with the execution of this mutation'
            }
        }
    }
})

module.exports = {
    type: ResetTaskPayload,
    description: 'ResetTaskPayload ',
    args: {
        input: {
            type: ResetTaskInput,
            description: 'ResetTaskInput ',
        }
    },

    resolve: async (root, args) => {
        let response = { message: "Succesfully reset the task." }

        var task = await Models.Task.findByPk(args.input.taskId)
        if (task === null) 
            { response.message = "No task found for that ID" }
        else

        // Reset the task
        await task.resetTask(args.input.result).then((task) => {
            response.task = task
        }).catch((err) => {
            let errors = err.errors.map(error => {
                return {
                    code: error.path,
                    message: error.message
                }
            })
            response.message = "There was an error reseting the task"
            response.errors = errors

            // return response
            console.log(response)
        })

        response.task = task
        return response
    }
};

