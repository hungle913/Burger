// Import MySQL connection.
var connection = require("./connection.js");

var orm = {
    all: function(tableInput, cb) {
        connection.query('SElECT * FROM ' + tableInput + ';', function(err, result){
            if(err) throw err;
            cb(result)
        })
    },

    update: function(tableInput, condition, cb) {
        connection.query('UPDATE '+ tableInput +' SET DEVOURED=true WHERE id='+ condition +';', function(err,result){
            if(err)throw err;
            cb(result);
        })
    },

    create: function(tableInput, val, cb) {
        connection.query('INSERT INTO ' + tableInput + '(BURGER_NAME) VALUES (' + val + ');', function(err, result) {
            if(err)throw err;
            cb(result);
        })
    }
}

module.exports = orm;
