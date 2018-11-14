const GraphQL = require("graphql");
const GraphQLInputObjectType = GraphQL.GraphQLInputObjectType;
const GraphQLObjectType = GraphQL.GraphQLObjectType;
const GraphQLString = GraphQL.GraphQLString;
const GraphQLFloat = GraphQL.GraphQLFloat;
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
            dispositions: {
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
    description: 'CreateTemplatePayload description',
    args: {
        input: {
            type: CreateTemplateInput,
            description: 'CreateTemplateInput description',
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

            // return response
            console.log(response)
        })

        return response
    }
};
