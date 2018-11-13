const GraphQL = require("graphql");
const GraphQLInputObjectType = GraphQL.GraphQLInputObjectType;
const GraphQLObjectType = GraphQL.GraphQLObjectType;
const GraphQLString = GraphQL.GraphQLString;
const GraphQLInt = GraphQL.GraphQLInt;
const GraphQLList = GraphQL.GraphQLList;

const Models = require('../../../models/index.js');

const CreateTaskGroupInput = new GraphQLInputObjectType({
    name: "CreateTaskGroupInput",
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    fields() {
        return {
            TemplateId: {
                type: GraphQLInt,
                description: 'Lorem ipsum dolar sit'
            }
        }
    }
})

const CreateTaskGroupPayload = new GraphQLObjectType({
    name: 'CreateTaskGroupPayload',
    description: 'Lorem ipsum dolar sit',
    fields() { 
        return {
            TemplateId: {
                type: GraphQLInt,
                description: 'Lorem ipsum dolar sit'
            }
        }
    }
})

module.exports = {
  type: CreateTaskGroupPayload,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  args: {
    input: {
      type: CreateTaskGroupInput,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    }
  },
  
  resolve: async (root, args) => {

    // const instance = Models.Service.create(args.input)
    return { message: "Not yet implemented" }

  }
};
