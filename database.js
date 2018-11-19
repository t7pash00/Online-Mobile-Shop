var mysql = require('mysql');
  var connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'mobileshopping'
  });
  module.exports = connection;

  //now able to use database by both of team members