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
    description: 'The primary required inputs to perform a task are the id of the task and the disposition to set it to.',
    fields() {
        return {
            taskId: {
                type: new GraphQLNonNull(GraphQLString)
            },
            disposition: {
                type: GraphQLString
            },
            configuration: {
                type: GraphQLString
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
            // errors: {
            //     type: new GraphQLList(ErrorType),
            //     description: 'Error code and description'
            // },
            // task: {
            //     type: TaskType,
            //     description: 'Task that was performed gets returned in its final state.'
            // }
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

        var task = await Models.Task.findByPk(args.input.taskId)
        if (task === null) 
            { response.message = "No task found for that ID" }
        else
            { response.message = task.performTask(args.input.disposition, args.input.configuration) }

        // Perform the task
        // await task.performTask(args.input.disposition).then((task) => {
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

        response.task = task
        return response
    }
};

