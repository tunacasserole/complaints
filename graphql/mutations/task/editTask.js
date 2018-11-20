const GraphQL = require("graphql");
const GraphQLInputObjectType = GraphQL.GraphQLInputObjectType;
const GraphQLObjectType = GraphQL.GraphQLObjectType;
const GraphQLString = GraphQL.GraphQLString;
const GraphQLList = GraphQL.GraphQLList;

const ErrorType = require('../../types/error')
const TaskType = require('../../types/task')
const Models = require('../../../models/index.js')

const EditTaskInput = new GraphQLInputObjectType({
    name: "EditTaskInput",
    description: 'The primary required input to create a new task is the id of the template you wish to use.',
    fields() {
        return {
            dueDate: {
                type: GraphQLString
            }
        }
    }
})

const EditTaskPayload = new GraphQLObjectType({
    name: "EditTaskPayload",
    description: 'The payload to be returned includes any errors, messages and the task itself.',
    fields() {
        return {
            message: {
                type: GraphQLString,
                description: 'Success or failure message.'
            },
            errors: {
                type: new GraphQLList(ErrorType),
                description: 'The error codes and descriptions for any unsuccesful request'
            },
            task: {
                type: TaskType,
                description: 'The task that was created.'
            }
        }
    }
})

module.exports = {
    type: EditTaskPayload,
    description: 'EditTaskPayload',
    args: {
        input: {
            type: EditTaskInput,
            description: 'EditTaskInput ',
        }
    },

    resolve: async (root, args) => {
        let response = { message: "Succesfully created the task." }
        
        await Models.Task.create(args.input).then((task) => {
            response.task = task
        }).catch((err) => {
            let errors = err.errors.map(error => {
                return {
                    code: error.path,
                    message: error.message
                }
            })
            response.message = "There was an error creating the task"
            response.errors = errors

            })

        return response
    }
};
