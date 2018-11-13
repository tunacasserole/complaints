const GraphQL = require("graphql");
const GraphQLInputObjectType = GraphQL.GraphQLInputObjectType;
const GraphQLObjectType = GraphQL.GraphQLObjectType;
const GraphQLString = GraphQL.GraphQLString;
const GraphQLInt = GraphQL.GraphQLInt;
const GraphQLList = GraphQL.GraphQLList;
const GraphQLNonNull = GraphQL.GraphQLNonNull;

const ErrorType = require('../../types/error')
const TemplateType = require('../../types/template')
const Models = require('../../../models/index.js')

const CreateTemplateInput = new GraphQLInputObjectType({
    name: "CreateTemplateInput",
    description: 'Create a new task template',
    fields() {
        return {
            moduleName: {
                type: new GraphQLNonNull(GraphQLString)
            },
            moduleVersion: {
                type: new GraphQLNonNull(GraphQLInt)
            },
            name: {
                type: new GraphQLNonNull(GraphQLString)
            },
            description: {
                type: GraphQLString
            },
            version: {
                type: GraphQLInt
            },
            configuration: {
                type: new GraphQLNonNull(GraphQLString),
                description: 'A configuration object describing the task.'
            }
        }
    }
})

const CreateTemplatePayload = new GraphQLObjectType({
    name: "CreateTemplatePayload",
    description: 'The attributes of a Template available for creation.',
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
            template: {
                type: TemplateType,
                description: 'Lorem ipsum dolar sit'
            }
        }
    }
})
module.exports = {
    type: CreateTemplatePayload,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    args: {
        input: {
            type: CreateTemplateInput,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        }
    },

    resolve: async (root, args) => {

        // const instance = Models.Service.create(args.input)
        return { message: "Not yet implemented" }

    }
};
