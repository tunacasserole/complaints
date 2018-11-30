const GraphQL = require("graphql");
const GraphQLInputObjectType = GraphQL.GraphQLInputObjectType;
const GraphQLObjectType = GraphQL.GraphQLObjectType;
const GraphQLString = GraphQL.GraphQLString;
const GraphQLInt = GraphQL.GraphQLInt;
const GraphQLList = GraphQL.GraphQLList;
const GraphQLNonNull = GraphQL.GraphQLNonNull;

const ErrorType = require('../../types/error')
const PlanStepType = require('../../types/step')
const Models = require('../../../models/index.js')

const EditPlanStepInput = new GraphQLInputObjectType({
    name: "EditPlanStepInput",
    description: 'All that is needed to create a new plan step is a name.',
    fields() {
        return {
            planId: {
                type: new GraphQLNonNull(GraphQLString),
            },
            stepId: {
                type: new GraphQLNonNull(GraphQLString),
            },
            sequence: {
                type: GraphQLInt,
            },
            offset: {
                type: GraphQLInt,
            }
        }
    }
})

const EditPlanStepPayload = new GraphQLObjectType({
    name: "EditPlanStepPayload",
    description: 'The attributes of a Plan Step available for creation.',
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
            planStep: {
                type: PlanStepType,
                description: 'The planStep that was created.'
            }
        }
    }
})

module.exports = {
    type: EditPlanStepPayload,
    description: 'EditPlanStepPayload',
    args: {
        input: {
            type: EditPlanStepInput,
            description: 'EditPlanStepInput',
        }
    },

    resolve: async (root, args) => {
        let response = {}
        await Models.PlanStep.create(args.input).then((planStep) => {
            response.planStep = planStep
        }).catch((err) => {
            let errors = err.errors.map(error => {
                return {
                    code: error.path,
                    message: error.message
                }
            })
            response.message = "There was an error editing the plan step"
            response.errors = errors
        })

        return response
    }
};
