const GraphQL = require("graphql");
const GraphQLInputObjectType = GraphQL.GraphQLInputObjectType;
const GraphQLObjectType = GraphQL.GraphQLObjectType;
const GraphQLString = GraphQL.GraphQLString;
const GraphQLID = GraphQL.GraphQLID;
const GraphQLInt = GraphQL.GraphQLInt;
const GraphQLList = GraphQL.GraphQLList;
const GraphQLNonNull = GraphQL.GraphQLNonNull;

const Models = require('../../../models/index.js');

const CreateStepRuleInput = new GraphQLInputObjectType({
    name: "CreateStepRuleInput",
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
            },
        }
    }
})



const CreateStepGroupPayload = new GraphQLObjectType({
    name: 'CreateStepRulePayload',
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
    type: CreateStepGroupPayload,
    description: 'Create Step rule payload.',
    args: {
        input: {
            type: CreateStepRuleInput,
            description: 'Create Step rule Input requires just rule name.',
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
