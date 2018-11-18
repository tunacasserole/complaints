const GraphQL = require("graphql");
const GraphQLInputObjectType = GraphQL.GraphQLInputObjectType;
const GraphQLObjectType = GraphQL.GraphQLObjectType;
const GraphQLString = GraphQL.GraphQLString;
const GraphQLNonNull = GraphQL.GraphQLNonNull;

const Models = require('../../../models/index.js');

const CreateTaskRUleInput = new GraphQLInputObjectType({
    name: "CreateTaskRUleInput",
    description: 'All that is needed to create a new task rule is a name.',
    fields() {
        return {
            name: {
                type: new GraphQLNonNull(GraphQLString),
                description: 'Name of the new task rule you wish to create.'
            }
        }
    }
})

const CreateTaskGroupPayload = new GraphQLObjectType({
    name: 'CreateTaskRulePayload',
    description: 'The payload to be returned includes any errors, messages and the task rule itself.',
    fields() {
        return {
            name: {
                type: GraphQLString,
                description: 'the name of the task rule that was created.'
            }
        }
    }
})

module.exports = {
    type: CreateTaskGroupPayload,
    description: 'Create Task rule payload.',
    args: {
        input: {
            type: CreateTaskRUleInput,
            description: 'Create Task rule Input requires just rule name.',
        }
    },

    resolve: async (root, args) => {
        let response = {}
        await Models.TaskRule.create(args.input).then((taskRule) => {
            response.taskRule = taskRule
        }).catch((err) => {
            let errors = err.errors.map(error => {
                return {
                    code: error.path,
                    message: error.message
                }
            })
            response.message = "There was an error creating the taskRule"
            response.errors = errors
        })

        return response
    }
};
