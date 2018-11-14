const GraphQL = require("graphql");
const GraphQLInputObjectType = GraphQL.GraphQLInputObjectType;
const GraphQLObjectType = GraphQL.GraphQLObjectType;
const GraphQLString = GraphQL.GraphQLString;
const GraphQLInt = GraphQL.GraphQLInt;
const GraphQLList = GraphQL.GraphQLList;

const Models = require('../../../models/index.js');

const PerformTaskInput = new GraphQLInputObjectType({
    name: "PerformTaskInput",
    description: 'The only input needed to perform a task is the id of the task to perform',
    fields() {
        return {
            TemplateId: {
                type: GraphQLInt,
                description: 'Lorem ipsum dolar sit'
            }
        }
    }
})

const PerformTaskPayload = new GraphQLObjectType({
    name: 'PerformTaskPayload',
    description: 'Lorem ipsum dolar sit',
    fields() {
        return {
            TemplateId: {
                type: GraphQLInt,
                description: 'Lorem ipsum dolar sit'
            }
        }
    }
})

module.exports = {
    type: PerformTaskPayload,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    args: {
        input: {
            type: PerformTaskInput,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        }
    },

    resolve: async (root, args) => {

        // const instance = Models.Service.create(args.input)
        return { message: "Not yet implemented" }

    }
};
