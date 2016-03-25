import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList
} from 'graphql';


let Schema = (db) => {
    // We Need a connection to Mongo

    let linkType = new GraphQLObjectType({
        name: 'Link',
        fields: () => ({
            _id: { type: GraphQLString},
            title: { type: GraphQLString},
            url: { type: GraphQLString}
        })
    });

    let schema = new GraphQLSchema({
        query: new GraphQLObjectType({
            name: 'LinksQuery',
            fields: () => ({
                links:{
                    type: new GraphQLList(linkType),
                    resolve: () => db.collection("links").find({}).toArray()
                }
            })
        })
    });

    return schema;
};

export default Schema;
