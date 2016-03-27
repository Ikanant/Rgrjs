import express from 'express';
var app = express();

import MongoClient from 'mongodb';

import Schema from './data/schema';
import GraphQLHTTP from 'express-graphql';

import {graphql} from 'graphql';
import {introspectionQuery} from 'graphql/utilities';
import fs from 'fs';

// ES-2015 Syntax: Arrow Functions
//app.get('/', (req, res) => res.send('helasdlo express'));
app.use(express.static('public'));

(async () => {
  let db = await MongoClient.connect("mongodb://localhost:27017/rgrjs");
  // This time we know if the db is resolved or rejected...so we don't need a callback

  let schema = Schema(db);

  app.use('/graphql', GraphQLHTTP({
    schema,
    graphiql: true
  }));

  app.listen(3000, () => {console.log("Listening on port 3000")});

  // Generate schema.json --> This does not have to be here because it will generate the schema
  // every time we save....but for now, it will work
  let json = await graphql(schema, introspectionQuery);

  // We will write this JSON to a file and will use the node fs library for that
  // The fs library has a write to file function I will use

  // ---> This needs to be commented for nodemon infinite loop ISSUE
  // fs.writeFile('./data/schema.json', JSON.stringify(json, null, 2), err => {
  //     if(err) throw err;
  // });

})();
