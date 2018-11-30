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

const editPlanInput = new GraphQLInputObjectType({
    name: "editPlanInput",
    description: 'Edit an existing plan',
    fields() {
        return {
            name: {
                type: new GraphQLNonNull(GraphQLString)
            },
            parentId: {
                type: GraphQLID,
            },
            type: {
                type: new GraphQLNonNull(GraphQLString)
            },
            description: {
                type: GraphQLString
            },
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
            },
            scheduleMethod: {
                type: GraphQLString,
            }
        }
    }
})

const editPlanPayload = new GraphQLObjectType({
    name: "editPlanPayload",
    description: 'The attributes of a Plan available for editing.',
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
    type: editPlanPayload,
    description: 'editPlanPayload',
    args: {
        input: {
            type: editPlanInput,
            description: 'editPlanInput',
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
            response.message = "There was an error editing the plan"
            response.errors = errors
        })

        return response
    }
};
