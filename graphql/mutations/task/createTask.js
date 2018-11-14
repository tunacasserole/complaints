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

const CreateTaskInput = new GraphQLInputObjectType({
    name: "CreateTaskInput",
    description: 'The primary required input to create a new task is the id of the template you wish to use.',
    fields() {
        return {
            templateId: {
                type: new GraphQLNonNull(GraphQLString)
            }
        }
    }
})

const CreateTaskPayload = new GraphQLObjectType({
    name: "CreateTaskPayload",
    description: 'The payload to be returned includes any errors, messages and the task itself.',
    fields() {
        return {
            message: {
                type: GraphQLString,
                description: 'Lorem ipsum dolar sit'
            },
            errors: {
                type: new GraphQLList(ErrorType),
                description: 'Lorem ipsum dolar sit'
            },
            task: {
                type: TaskType,
                description: 'Lorem ipsum dolar sit'
            }
        }
    }
})

module.exports = {
    type: CreateTaskPayload,
    description: 'CreateTaskPayload description',
    args: {
        input: {
            type: CreateTaskInput,
            description: 'CreateTaskInput description',
        }
    },

    resolve: async (root, args) => {
        let response = {}
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

            // return response
            console.log(response)
        })

        return response
    }
};
