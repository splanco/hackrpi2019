const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const app = express();

//const sqlInsert = require('./sqlInsert');
//const sqlDelete = require('./sqlDelete');
//const sqlSelect = require('./sqlSelect');


// Express Middleware for serving static files
app.use(express.static(path.join(__dirname, '/public')));

app.get('/', function(req, res) {
    res.redirect('index.html');
});

app.listen(3000, () => console.log('Listening on http://localhost:3000/'));