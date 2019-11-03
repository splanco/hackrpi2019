require('@google-cloud/debug-agent').start();
const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const app = express();


// Express Middleware for serving static files
app.use(express.static(path.join(__dirname, '/Public')));

app.get('/', function(req, res) {
    res.redirect('index.html');
});


var pool = mysql.createPool({
    connectionLimit : 100, //important
    host     : 'localhost',
    user     : 'root',
    password : 'dataispet',
    database : 'petData'
});


function handle_database(req,res) {
    // connection will be acquired automatically
    pool.query("select * from pet",function(err,rows){
        if(err) {
            return res.json({'error': true, 'message': 'Error occurred'+err});
        }
        //connection will be released as well.
        res.json(rows);
    });
}


function addRow(data) {
    let insertQuery = 'INSERT INTO pet VALUES (?,?,?,?,?,?)';
    let query = mysql.format(insertQuery,[data.name,data.petType, data.sex, data.locFound, data.locNow, data.date]);
    pool.query(query,(err, response) => {
        if(err) {
            console.error(err);
            return;
        }
        // rows added
        console.log(response.insertId);
    });
}


function deleteRow(userName) {
    let deleteQuery = "DELETE from pet where name=? and petType=? and sex=? and locationFound=? and locationNow=? date=?";
    let query = mysql.format(deleteQuery, [data.name,data.petType, data.sex, data.locFound, data.locNow, data.date]);
    pool.query(query,(err, response) => {
        if(err) {
            console.error(err);
            return;
        }
        // rows deleted
        console.log(response.affectedRows);
    });
}


// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log('Listening on http://localhost:8080/');
    console.log('Press Ctrl+C to quit.');
});
// [END gae_node_request_example]

module.exports = app;
