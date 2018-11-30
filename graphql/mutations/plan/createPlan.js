const GraphQL = require("graphql");
const GraphQLInputObjectType = GraphQL.GraphQLInputObjectType;
const GraphQLObjectType = GraphQL.GraphQLObjectType;
const GraphQLString = GraphQL.GraphQLString;
const GraphQLID = GraphQL.GraphQLID;
const GraphQLInt = GraphQL.GraphQLInt;
const GraphQLList = GraphQL.GraphQLList;
const GraphQLNonNull = GraphQL.GraphQLNonNull;

const PlanType = require('../../types/plan')

const ErrorType = require('../../types/error')
const Models = require('../../../models/index.js')

const CreatePlanInput = new GraphQLInputObjectType({
    name: "CreatePlanInput",
    description: 'Create a new plan',
    fields() {
        return {
            name: {
                type: new GraphQLNonNull(GraphQLString)
            },
            parentId: {
                type: GraphQLID,
                description: 'Must be one of the following: boolean, compute, date, free, select, multiple'
            },
            type: {
                type: new GraphQLNonNull(GraphQLString)
            },
            // description: {
            //     type: GraphQLString
            // },
            businessUnit: {
                type: GraphQLString
            },
            productClass: {
                type: GraphQLString
            },
            version: {
                type: GraphQLInt
            },
            duration: {
                type: GraphQLString,
                description: 'A configuration object describing the task.'
            },
            scheduleMethod: {
                type: GraphQLString,
                description: 'A configuration object describing the task.'
            }
        }
    }
})

const CreatePlanPayload = new GraphQLObjectType({
    name: "CreatePlanPayload",
    description: 'The attributes of a Plan available for creation.',
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
            plan: {
                type: PlanType,
                description: 'The plan that was created.'
            }
        }
    }
})

module.exports = {
    type: CreatePlanPayload,
    description: 'CreatePlanPayload',
    args: {
        input: {
            type: CreatePlanInput,
            description: 'CreatePlanInput',
        }
    },

    resolve: async (root, args) => {
        let response = {}
        await Models.Plan.create(args.input).then((plan) => {
            response.plan = plan
        }).catch((err) => {
            let errors = err.errors.map(error => {
                return {
                    code: error.path,
                    message: error.message
                }
            })
            response.message = "There was an error creating the plan"
            response.errors = errors
        })

        return response
    }
};
