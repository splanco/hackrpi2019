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
    database: "petData"
});

con.connect(function(err) {
    if (err) throw err;
    var sql = "DELETE FROM pet WHERE address = 'Mountain 21'";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Number of records deleted: " + result.affectedRows);
    });
});