const GraphQL = require("graphql");
const GraphQLInputObjectType = GraphQL.GraphQLInputObjectType;
const GraphQLObjectType = GraphQL.GraphQLObjectType;
const GraphQLString = GraphQL.GraphQLString;
const GraphQLID = GraphQL.GraphQLID;
const GraphQLInt = GraphQL.GraphQLInt;
const GraphQLList = GraphQL.GraphQLList;
const GraphQLNonNull = GraphQL.GraphQLNonNull;

const StepRuleType = require('../../types/stepRule')

const ErrorType = require('../../types/error')
const Models = require('../../../models/index.js')

const EditStepRuleInput = new GraphQLInputObjectType({
    name: "EditStepRuleInput",
    description: 'Create a new step rule.',
    fields() {
        return {
            name: {
                type: new GraphQLNonNull(GraphQLString)
            },
            stepId: {
                type: new GraphQLNonNull(GraphQLID)
            },
            priorId: {
                type: GraphQLID,
            },
            priorResult: {
                type: GraphQLString,
            },
            operator: {
                type: GraphQLString,
            },
            sequence: {
                type: GraphQLInt,
            }
        }
    }
})

const EditStepRulePayload = new GraphQLObjectType({
    name: "EditStepRulePayload",
    description: 'The attributes of a StepRule available for creation.',
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
            stepRule: {
                type: StepRuleType,
                description: 'The stepRule that was created.'
            }
        }
    }
})

module.exports = {
    type: EditStepRulePayload,
    description: 'EditStepRulePayload',
    args: {
        input: {
            type: EditStepRuleInput,
            description: 'EditStepRuleInput',
        }
    },

    resolve: async (root, args) => {
        let response = {}
        await Models.StepRule.create(args.input).then((stepRule) => {
            response.stepRule = stepRule
        }).catch((err) => {
            let errors = err.errors.map(error => {
                return {
                    code: error.path,
                    message: error.message
                }
            })
            response.message = "There was an error creating the stepRule"
            response.errors = errors
        })

        return response
    }
};
