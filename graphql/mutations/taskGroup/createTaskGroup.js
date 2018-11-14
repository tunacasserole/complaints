const GraphQL = require("graphql");
const GraphQLInputObjectType = GraphQL.GraphQLInputObjectType;
const GraphQLObjectType = GraphQL.GraphQLObjectType;
const GraphQLString = GraphQL.GraphQLString;
const GraphQLInt = GraphQL.GraphQLInt;
const GraphQLList = GraphQL.GraphQLList;

const Models = require('../../../models/index.js');

const CreateTaskGroupInput = new GraphQLInputObjectType({
    name: "CreateTaskGroupInput",
    description: 'All that is needed to create a new task group is a name.',
    fields() {
        return {
            name: {
                type: new GraphQLNonNull(GraphQLString),
                description: 'Name of the new task group you wish to create.'
            }
        }
    }
})

const CreateTaskGroupPayload = new GraphQLObjectType({
    name: 'CreateTaskGroupPayload',
    description: 'The payload to be returned includes any errors, messages and the task group itself.',
    fields() {
        return {
            name: {
                type: new GraphQLNonNull(GraphQLString),
                description: 'the name of the task group that was created.'
            }
        }
    }
})

module.exports = {
    type: CreateTaskGroupPayload,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    args: {
        input: {
            type: CreateTaskGroupInput,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        }
    },

    resolve: async (root, args) => {
        let response = {}
        await Models.TaskGroup.create(args.input).then((taskGroup) => {
            response.taskGroup = taskGroup
        }).catch((err) => {
            let errors = err.errors.map(error => {
                return {
                    code: error.path,
                    message: error.message
                }
            })
            response.message = "There was an error creating the taskGroup"
            response.errors = errors
        })

        return response
    }
};
