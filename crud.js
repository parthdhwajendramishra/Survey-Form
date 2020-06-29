var mysql = require('mysql');
let config = require('./config.js');


const createTable=(tablename)=>{
  let connection = mysql.createConnection(config);
connection.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }

  let createTodos = "CREATE TABLE IF NOT EXISTS " +tablename+" (first_name VARCHAR(25), middle_name VARCHAR(25), last_name VARCHAR(25),state VARCHAR(25),city VARCHAR(25), email VARCHAR(50), fav_book VARCHAR(25), fav_poem VARCHAR(25) )";

  connection.query(createTodos, function(err, results, fields) {
    if (err) {
      console.log(err.message);
    }
  });

  connection.end(function(err) {
    if (err) {
      return console.log(err.message);
    }
  });
});
};

const addRow=(values,tablename)=>{
  let connection = mysql.createConnection(config);
  connection.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }

    var sql = "INSERT INTO "+tablename+" (first_name,middle_name,last_name,state,city,email,fav_book,fav_poem) VALUES ?";

    connection.query(sql, [values], function (err, result) {
      if (err) throw err;
      console.log("Number of records inserted: " + result.affectedRows);
    });

    connection.end(function(err) {
      if (err) {
        return console.log(err.message);
      }
    });
  });
};

module.exports={
  createTable:createTable,
  addRow:addRow
};