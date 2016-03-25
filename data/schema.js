import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList
} from 'graphql';

let data = [12,13,14];

let schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'ExampleQuery',
        fields: () => ({
            data:{
                type: new GraphQLList(GraphQLInt),
                resolve: () => data
            }
        })
    }),

    mutation: new GraphQLObjectType({
        name: 'MutationQuery',
        fields: () => ({
            incrementCounter: {
                type: GraphQLInt,
                resolve: () => ++counter
            }
        })
    })
});

export default schema;
