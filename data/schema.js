import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList
} from 'graphql';

let data = [
  {counter: 1},
  {counter: 2},
  {counter: 3},
];

let counterType = new GraphQLObjectType({
    name: 'CounterType',
    fields: () => ({
        counter:{
            type: GraphQLInt
        }
    })
});

let schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'ExampleQuery',
        fields: () => ({
            data:{
                type: new GraphQLList(counterType),
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
