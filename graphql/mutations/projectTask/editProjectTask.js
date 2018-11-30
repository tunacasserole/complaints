const GraphQL = require("graphql");
const GraphQLInputObjectType = GraphQL.GraphQLInputObjectType;
const GraphQLObjectType = GraphQL.GraphQLObjectType;
const GraphQLString = GraphQL.GraphQLString;
const GraphQLID = GraphQL.GraphQLID;
const GraphQLInt = GraphQL.GraphQLInt;
const GraphQLList = GraphQL.GraphQLList;
const GraphQLNonNull = GraphQL.GraphQLNonNull;

const ErrorType = require('../../types/error')
const ProjectTaskType = require('../../types/projectTask')
const Models = require('../../../models/index.js')

const EditProjectTaskInput = new GraphQLInputObjectType({
    name: "EditProjectTaskInput",
    description: 'Edit a Project Taskp',
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


const EditProjectTaskPayload = new GraphQLObjectType({
    name: "EditProjectTaskPayload",
    description: 'The attributes of a Project Task available for creation.',
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
    type: EditProjectTaskPayload,
    description: 'EditProjectTaskPayload',
    args: {
        input: {
            type: EditProjectTaskInput,
            description: 'EditProjectTaskInput',
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
            response.message = "There was an error creating the editing the Project Task"
            response.errors = errors
        })

        return response
    }
};
