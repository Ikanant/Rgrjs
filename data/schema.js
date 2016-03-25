import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString
} from 'graphql';

let counter = 7;

let schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'RandomQuery',
        fields: () => ({
            counter:{
                type: GraphQLInt,
                resolve: () => counter
            },
            message:{
                type: GraphQLString,
                resolve: () => 'Hello hello graphql'
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
