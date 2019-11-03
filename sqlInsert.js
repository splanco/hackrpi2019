var mysql = require('mysql');

const hostIP = "35.237.80.23";
var username = "";
var pass = "";

function info(x, y) {
    username = x;
    pass = y;
}

var con = mysql.createConnection({
    host: hostIP,
    user: username,
    password: pass,
    database: "PetData"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO pet (name, address) VALUES ('Company Inc', 'Highway 37')";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });
});