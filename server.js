import express from 'express';
var app = express();

import MongoClient from 'mongodb';

import schema from './data/schema';
import GraphQLHTTP from 'express-graphql';

// ES-2015 Syntax: Arrow Functions
//app.get('/', (req, res) => res.send('helasdlo express'));
app.use(express.static('public'));

app.use('/graphql', GraphQLHTTP({
  schema, // Which in ES5 would be= schema: schema
  graphiql: true
}));

var db;
MongoClient.connect("mongodb://localhost:27017/rgrjs", (err, database) => {
    if (err) throw err;

    db = database;
    app.listen(3000, () => {console.log("Listening on port 3000")});
});

app.get('/data/links', (req, res) => {
  db.collection("links").find({}).toArray((err, links) => {
      if(err) throw err;
      res.json(links);
  });
});
