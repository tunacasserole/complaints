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

const EditTaskRuleInput = new GraphQLInputObjectType({
    name: "EditTaskRuleInput",
    description: 'Edit a new task rule.',
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


const EditTaskRulePayload = new GraphQLObjectType({
    name: "EditTaskRulePayload",
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
            taskRule: {
                type: TaskRuleType,
                description: 'The task rule that was created.'
            }
        }
    }
})

module.exports = {
    type: EditTaskRulePayload,
    description: 'EditTaskRulePayload',
    args: {
        input: {
            type: EditTaskRuleInput,
            description: 'EditTaskRuleInput ',
        }
    },

    resolve: async (root, args) => {
        let response = { message: "Succesfully edited the taskRule." }

        await Models.TaskRule.create(args.input).then((taskRule) => {
            response.taskRule = taskRule
        }).catch((err) => {
            let errors = err.errors.map(error => {
                return {
                    code: error.path,
                    message: error.message
                }
            })
            response.message = "There was an error editing the taskRule"
            response.errors = errors

        })

        return response
    }
};
