const GraphQL = require("graphql");
const GraphQLInputObjectType = GraphQL.GraphQLInputObjectType;
const GraphQLObjectType = GraphQL.GraphQLObjectType;
const GraphQLString = GraphQL.GraphQLString;
const GraphQLID = GraphQL.GraphQLID;
const GraphQLInt = GraphQL.GraphQLInt;
const GraphQLList = GraphQL.GraphQLList;
const GraphQLNonNull = GraphQL.GraphQLNonNull;

const StepType = require('../../types/step')

const ErrorType = require('../../types/error')
const Models = require('../../../models/index.js')

const EditStepInput = new GraphQLInputObjectType({
    name: "EditStepInput",
    description: 'Edit an existing step',
    fields() {
        return {
            name: {
                type: new GraphQLNonNull(GraphQLString)
            },
            type: {
                type: new GraphQLNonNull(GraphQLString)
            },
            description: {
                type: GraphQLString
            },
            type: {
                type: GraphQLString
            },
            parentId: {
                type: GraphQLID,
            },
            resultType: {
                type: GraphQLString,
                description: 'Must be one of the following: boolean, compute, date, free, select, list'
            },
            collectionId: {
                type: GraphQLID
            },
            module: {
                type: GraphQLString
            },
            duration: {
                type: GraphQLInt,
            }
        }
    }
})

const EditStepPayload = new GraphQLObjectType({
    name: "EditStepPayload",
    description: 'The attributes of a Step available for editing.',
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
            step: {
                type: StepType,
                description: 'The step that was created.'
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
        await Models.Step.create(args.input).then((step) => {
            response.step = step
        }).catch((err) => {
            let errors = err.errors.map(error => {
                return {
                    code: error.path,
                    message: error.message
                }
            })
            response.message = "There was an error creating the step"
            response.errors = errors
        })

        return response
    }
};
