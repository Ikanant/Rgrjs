express = require('express');

var app = express();

// ES-2015 Syntax: Arrow Functions
app.get('/', (req, res) => res.send('hello express'));

app.listen(3000);
