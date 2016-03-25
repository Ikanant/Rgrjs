import express from 'express';
var app = express();

import MongoClient from 'mongodb';

import schema from './data/schema';
import GraphQLHTTP from 'express-graphql';

// ES-2015 Syntax: Arrow Functions
//app.get('/', (req, res) => res.send('helasdlo express'));
app.use(express.static('public'));

var db;
//mongodb://Ikanant:apple@ds021999.mlab.com:21999/rgrjs
MongoClient.connect("mongodb://localhost:27017/rgrjs", (err, database) => {
    if (err) throw err;

    db = database;

    app.use('/graphql', GraphQLHTTP({
      schema: schema(db),
      graphiql: true
    }));

    app.listen(3000, () => {console.log("Listening on port 3000")});
});
