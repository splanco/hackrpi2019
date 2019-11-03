require('@google-cloud/debug-agent').start();
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
app.use(express.static(path.join(__dirname, '/Public')));

app.get('/', function(req, res) {
    res.redirect('index.html');
});


// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log('Listening on http://localhost:8080/');
    console.log('Press Ctrl+C to quit.');
});
// [END gae_node_request_example]

module.exports = app;