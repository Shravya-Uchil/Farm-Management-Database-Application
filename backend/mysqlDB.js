// SJSU CMPE 226 Fall 2020 TEAM3
var mysql = require('mysql');
var connection = mysql.createPool({
  host: "localhost",
  user: '',
  port: 3306,
  password: '',
  database: 'farm-mgmt',
  insecureAuth: true,
});

connection.getConnection((err) => {
  if (err) {
    throw 'Error occured: ' + err;
  }
});

module.exports = connection;
