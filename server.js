express = require('express');
MongoClient = require('mongodb');

var app = express();

// ES-2015 Syntax: Arrow Functions
//app.get('/', (req, res) => res.send('helasdlo express'));
app.use(express.static('public'));



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
