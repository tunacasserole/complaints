const GraphQL = require('graphql')
const GraphQLList = GraphQL.GraphQLList
const GraphQLString = GraphQL.GraphQLString
const GraphQLInt = GraphQL.GraphQLInt
const GraphQLObjectType = GraphQL.GraphQLObjectType;

const Models = require('../../../models/index.js')

const ModuleListType = new GraphQLObjectType({
  name: 'ModuleList',
  fields() {
    return {
      name: {
        type: GraphQLString,
      }
    }
  }
})

module.exports = {
  type: new GraphQLList(GraphQLString),
  description: 'Returns a list of javascript modules available for task processing.',
  args: {
    
  },

  resolve: async (root, args) => {

    var fs = require('fs');
    var files = fs.readdirSync('./lib/task_modules/');

    // Issue query and return the promise
    return files
  }
};
