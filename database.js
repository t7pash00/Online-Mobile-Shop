var mysql = require('mysql');
  var connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'mobileshopping'
  });
  module.exports = connection;