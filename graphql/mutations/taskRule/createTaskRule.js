const GraphQL = require("graphql");
const GraphQLInputObjectType = GraphQL.GraphQLInputObjectType;
const GraphQLObjectType = GraphQL.GraphQLObjectType;
const GraphQLString = GraphQL.GraphQLString;
const GraphQLID = GraphQL.GraphQLID;
const GraphQLInt = GraphQL.GraphQLInt;
const GraphQLList = GraphQL.GraphQLList;
const GraphQLNonNull = GraphQL.GraphQLNonNull;

const TaskRuleType = require('../../types/taskRule')

const ErrorType = require('../../types/error')
const Models = require('../../../models/index.js')

const CreateTaskRuleInput = new GraphQLInputObjectType({
    name: "CreateTaskRuleInput",
    description: 'Create a new task rule.',
    fields() {
        return {
            name: {
                type: new GraphQLNonNull(GraphQLString)
            },
            taskId: {
                type: new GraphQLNonNull(GraphQLID)
            },
            priorId: {
                type: GraphQLString,
            },
            priorResult: {
                type: GraphQLString,
            },
            operator: {
                type: GraphQLString,
            },
            sequence: {
                type: GraphQLInt,
            },
        }
    }
})

const CreateTaskRulePayload = new GraphQLObjectType({
    name: "CreateTaskRulePayload",
    description: 'The payload to be returned includes any errors, messages and the task rule itself.',
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
                type: TaskRuleType,
                description: 'The task that was created.'
            }
        }
    }
})

module.exports = {
    type: CreateTaskRulePayload,
    description: 'CreateTaskRulePayload',
    args: {
        input: {
            type: CreateTaskRuleInput,
            description: 'CreateTaskRuleInput ',
        }
    },

    resolve: async (root, args) => {
        let response = { message: "Succesfully created the task." }

        await Models.TaskRule.create(args.input).then((taskRule) => {
            response.taskRule = taskRule
        }).catch((err) => {
            let errors = err.errors.map(error => {
                return {
                    code: error.path,
                    message: error.message
                }
            })
            response.message = "There was an error creating the task rule."
            response.errors = errors

        })

        return response
    }
};
