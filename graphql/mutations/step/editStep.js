const GraphQL = require("graphql");
const GraphQLInputObjectType = GraphQL.GraphQLInputObjectType;
const GraphQLObjectType = GraphQL.GraphQLObjectType;
const GraphQLString = GraphQL.GraphQLString;
const GraphQLFloat = GraphQL.GraphQLFloat;
const GraphQLList = GraphQL.GraphQLList;
const GraphQLNonNull = GraphQL.GraphQLNonNull;

const ErrorType = require('../../types/error')
const TemplateType = require('../../types/step')
const Models = require('../../../models/index.js')

const EditStepInput = new GraphQLInputObjectType({
    name: "EditStepInput",
    description: 'Create a new task template',
    fields() {
        return {
            name: {
                type: new GraphQLNonNull(GraphQLString)
            },
            type: {
                type: new GraphQLNonNull(GraphQLString)
            },
            moduleName: {
                type: GraphQLString,
                description: 'Must be one of the following: boolean, compute, date, free, select, multiple'
            },
            moduleVersion: {
                type: GraphQLFloat
            },
            description: {
                type: GraphQLString
            },
            results: {
                type: GraphQLString
            },
            version: {
                type: GraphQLFloat
            },
            configuration: {
                type: GraphQLString,
                description: 'A configuration object describing the task.'
            }
        }
    }
})

const EditStepPayload = new GraphQLObjectType({
    name: "EditStepPayload",
    description: 'The attributes of a Template available for creation.',
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
            template: {
                type: TemplateType,
                description: 'The template that was created.'
            }
        }
    }
})

module.exports = {
    type: EditStepPayload,
    description: 'EditStepPayload',
    args: {
        input: {
            type: EditStepInput,
            description: 'EditStepInput',
        }
    },

    resolve: async (root, args) => {
        let response = {}
        await Models.Template.create(args.input).then((template) => {
            response.template = template
        }).catch((err) => {
            let errors = err.errors.map(error => {
                return {
                    code: error.path,
                    message: error.message
                }
            })
            response.message = "There was an error creating the template"
            response.errors = errors
        })

        return response
    }
};
