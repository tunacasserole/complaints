const GraphQL = require("graphql");
const GraphQLInputObjectType = GraphQL.GraphQLInputObjectType;
const GraphQLObjectType = GraphQL.GraphQLObjectType;
const GraphQLString = GraphQL.GraphQLString;
const GraphQLID = GraphQL.GraphQLID;
const GraphQLInt = GraphQL.GraphQLInt;
const GraphQLList = GraphQL.GraphQLList;
const GraphQLNonNull = GraphQL.GraphQLNonNull;

const ProjectTaskType = require('../../types/projectTask')

const ErrorType = require('../../types/error')
const Models = require('../../../models/index.js')

const CreateProjectTaskInput = new GraphQLInputObjectType({
    name: "CreateProjectTaskInput",
    description: 'Create a new task projectTask',
    fields() {
        return {
            name: {
                type: new GraphQLNonNull(GraphQLString)
            },
            projectId: {
                type: new GraphQLNonNull(GraphQLString)
            },
            taskId: {
                type: GraphQLID,
            },
            sequence: {
                type: GraphQLInt,
            }
        }
    }
})

const CreateProjectTaskPayload = new GraphQLObjectType({
    name: "CreateProjectTaskPayload",
    description: 'The attributes of a ProjectTask available for creation.',
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
            projectTask: {
                type: ProjectTaskType,
                description: 'The projectTask that was created.'
            }
        }
    }
})

module.exports = {
    type: CreateProjectTaskPayload,
    description: 'CreateProjectTaskPayload',
    args: {
        input: {
            type: CreateProjectTaskInput,
            description: 'CreateProjectTaskInput',
        }
    },

    resolve: async (root, args) => {
        let response = {}
        await Models.ProjectTask.create(args.input).then((projectTask) => {
            response.projectTask = projectTask
        }).catch((err) => {
            let errors = err.errors.map(error => {
                return {
                    code: error.path,
                    message: error.message
                }
            })
            response.message = "There was an error creating the projectTask"
            response.errors = errors
        })

        return response
    }
};
