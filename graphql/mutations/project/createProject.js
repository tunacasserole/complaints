const GraphQL = require("graphql");
const GraphQLInputObjectType = GraphQL.GraphQLInputObjectType;
const GraphQLObjectType = GraphQL.GraphQLObjectType;
const GraphQLString = GraphQL.GraphQLString;
const GraphQLID = GraphQL.GraphQLID;
const GraphQLInt = GraphQL.GraphQLInt;
const GraphQLList = GraphQL.GraphQLList;
const GraphQLNonNull = GraphQL.GraphQLNonNull;

const ErrorType = require('../../types/error')
const ProjectType = require('../../types/project')
const Models = require('../../../models/index.js')

const CreateProjectInput = new GraphQLInputObjectType({
    name: "CreateProjectInput",
    description: 'Create a new project',
    fields() {
        return {
            name: {
                type: new GraphQLNonNull(GraphQLString)
            },
            parentId: {
                type: GraphQLID,
            },
            planId: {
                type: GraphQLID,
            },
            name: {
                type: new GraphQLNonNull(GraphQLString)
            },
            description: {
                type: GraphQLString
            },
            state: {
                type: GraphQLString
            },
            startDate: {
                type: GraphQLString
            },
            endDate: {
                type: GraphQLString
            },
            dueDate: {
                type: GraphQLString
            },
            ownerId: {
                type: GraphQLID,
            }
        }
    }
})

const CreateProjectPayload = new GraphQLObjectType({
    name: "CreateProjectPayload",
    description: 'The attributes of a Project available for creation.',
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
            project: {
                type: ProjectType,
                description: 'The project that was created.'
            }
        }
    }
})

module.exports = {
    type: CreateProjectPayload,
    description: 'CreateProjectPayload',
    args: {
        input: {
            type: CreateProjectInput,
            description: 'CreateProjectInput',
        }
    },

    resolve: async (root, args) => {
        let response = {}
        await Models.Project.create(args.input).then((project) => {
            response.project = project
        }).catch((err) => {
            let errors = err.errors.map(error => {
                return {
                    code: error.path,
                    message: error.message
                }
            })
            response.message = "There was an error creating the project"
            response.errors = errors
        })

        return response
    }
};
