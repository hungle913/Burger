// Import MySQL connection.
var connection = require("./connection.js");

var orm = {
    all: function(userInput, cb) {
        connection.query('SElECT * FROM ' + userInput + ';', function(err, result){
            if(err) throw err;
            cb(result)
        })
    }
}