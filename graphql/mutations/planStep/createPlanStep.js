const GraphQL = require("graphql");
const GraphQLInputObjectType = GraphQL.GraphQLInputObjectType;
const GraphQLObjectType = GraphQL.GraphQLObjectType;
const GraphQLString = GraphQL.GraphQLString;
const GraphQLInt = GraphQL.GraphQLInt;
const GraphQLList = GraphQL.GraphQLList;
const GraphQLNonNull = GraphQL.GraphQLNonNull;

const Models = require('../../../models/index.js');

const CreatePlanStepInput = new GraphQLInputObjectType({
    name: "CreatePlanStepInput",
    description: 'All that is needed to create a new plan step is a name.',
    fields() {
        return {
            planId: {
                type: new GraphQLNonNull(GraphQLString),
                description: 'Name of the new plan step you wish to create.'
            },
            stepId: {
                type: new GraphQLNonNull(GraphQLString),
                description: 'Name of the new plan step you wish to create.'
            },
            sequence: {
                type: GraphQLInt,
                description: 'Name of the new plan step you wish to create.'
            },
            offset: {
                type: GraphQLInt,
                description: 'Name of the new plan step you wish to create.'
            }
        }
    }
})

const createPlanStepPayload = new GraphQLObjectType({
    name: 'createPlanStepPayload',
    description: 'The payload to be returned includes any errors, messages and the plan step itself.',
    fields() {
        return {
            name: {
                type: GraphQLString,
                description: 'the name of the plan step that was created.'
            }
        }
    }
})

module.exports = {
    type: createPlanStepPayload,
    description: 'Create Task Group payload.',
    args: {
        input: {
            type: CreatePlanStepInput,
            description: 'Create Task Group Input requires just group name.',
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
            response.message = "There was an error creating the planStep"
            response.errors = errors
        })

        return response
    }
};
