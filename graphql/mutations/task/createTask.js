const GraphQL = require("graphql");
const GraphQLInputObjectType = GraphQL.GraphQLInputObjectType;
const GraphQLObjectType = GraphQL.GraphQLObjectType;
const GraphQLString = GraphQL.GraphQLString;
const GraphQLInt = GraphQL.GraphQLInt;
const GraphQLList = GraphQL.GraphQLList;

const Models = require('../../../models/index.js');

const CreateTaskInput = new GraphQLInputObjectType({
    name: "CreateTaskInput",
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    fields() {
        return {
            taskTemplateId: {
                type: GraphQLInt,
                description: 'Lorem ipsum dolar sit'
            }
        }
    }
})

const CreateTaskPayload = new GraphQLObjectType({
    name: 'CreateTaskPayload',
    description: 'Lorem ipsum dolar sit',
    fields() { 
        return {
            taskTemplateId: {
                type: GraphQLInt,
                description: 'Lorem ipsum dolar sit'
            }
        }
    }
})

module.exports = {
  type: CreateTaskPayload,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  args: {
    input: {
      type: CreateTaskInput,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    }
  },
  
  resolve: async (root, args) => {

    // const instance = Models.Service.create(args.input)
    return { message: "Not yet implemented" }

  }
};
