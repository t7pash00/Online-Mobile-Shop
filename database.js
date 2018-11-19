var mysql = require('mysql');
  var connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'QWERTY1234',
    database: 'mobileshopping'
  });
  module.exports = connection;

  