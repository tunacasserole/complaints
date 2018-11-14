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

const PerformTaskInput = new GraphQLInputObjectType({
    name: "PerformTaskInput",
    description: 'The primary required input to create a new task is the id of the task template you wish to use.',
    fields() {
        return {
            taskId: {
                type: new GraphQLNonNull(GraphQLString)
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
            errors: {
                type: new GraphQLList(ErrorType),
                description: 'Error code and description'
            },
            task: {
                type: TaskType,
                description: 'Task that was performed gets returned in its final state.'
            }
        }
    }
})

module.exports = {
    type: PerformTaskPayload,
    description: 'PerformTaskPayload description',
    args: {
        input: {
            type: PerformTaskInput,
            description: 'PerformTaskInput description',
        }
    },

    resolve: async (root, args) => {
        let response = {}

        // Find the task

        var task = await Models.Task.findByPk('90edcb50-e824-11e8-9994-8d641308d125')
        console.log(task)
        task.perform();

        // Perform the task
        // await task.perform().then((task) => {
        //     response.task = task
        // }).catch((err) => {
        //     let errors = err.errors.map(error => {
        //         return {
        //             code: error.path,
        //             message: error.message
        //         }
        //     })
        //     response.message = "There was an error performing the task"
        //     response.errors = errors

        //     // return response
        //     console.log(response)
        // })

        return response
    }
};
