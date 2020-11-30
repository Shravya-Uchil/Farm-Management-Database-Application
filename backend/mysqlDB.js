// SJSU CMPE 226 Fall 2020 TEAM3
var mysql = require('mysql');
var connection = mysql.createPool({
  // host: "localhost",
  host: 'database-1.crfdq7kjsupx.us-west-2.rds.amazonaws.com',
  user: 'admin',
  port: 3306,
  password: 'farmpwd123',
  database: 'farm-mgmt',
  insecureAuth: true,
});

connection.getConnection((err) => {
  if (err) {
    throw 'Error occured: ' + err;
  }
});

module.exports = connection;
