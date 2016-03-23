express = require('express');

var app = express();

// ES-2015 Syntax: Arrow Functions
//app.get('/', (req, res) => res.send('helasdlo express'));
app.use(express.static('public'));

app.listen(3000);
